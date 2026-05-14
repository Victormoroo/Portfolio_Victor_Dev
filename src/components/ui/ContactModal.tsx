import { useCallback, useEffect, useId, useState, type FormEvent } from 'react';
import { Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'sending' | 'success' | 'error';

const LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 80,
  EMAIL_MAX: 120,
  SUBJECT_MAX: 120,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 2000,
} as const;

const NAME_REGEX = /^[\p{L}\s'.\-]+$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldName = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<FieldName, string>>;

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  const { lang } = useLanguage();
  const t = content.contact.modal;
  const er = t.errors;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const runValidation = useCallback((): Errors => {
    const errs: Errors = {};

    const trimmedName = name.trim();
    if (!trimmedName) errs.name = er.name.required[lang];
    else if (trimmedName.length < LIMITS.NAME_MIN) errs.name = er.name.tooShort[lang];
    else if (trimmedName.length > LIMITS.NAME_MAX) errs.name = er.name.tooLong[lang];
    else if (!NAME_REGEX.test(trimmedName)) errs.name = er.name.invalid[lang];

    const trimmedEmail = email.trim();
    if (!trimmedEmail) errs.email = er.email.required[lang];
    else if (!EMAIL_REGEX.test(trimmedEmail)) errs.email = er.email.invalid[lang];

    if (subject.length > LIMITS.SUBJECT_MAX) errs.subject = er.subject.tooLong[lang];

    const trimmedMessage = message.trim();
    if (!trimmedMessage) errs.message = er.message.required[lang];
    else if (trimmedMessage.length < LIMITS.MESSAGE_MIN) errs.message = er.message.tooShort[lang];
    else if (trimmedMessage.length > LIMITS.MESSAGE_MAX) errs.message = er.message.tooLong[lang];

    return errs;
  }, [name, email, subject, message, lang, er]);

  // Re-run validation as the user types so errors that are already
  // visible can clear the moment the user fixes the issue.
  useEffect(() => {
    setErrors(runValidation());
  }, [runValidation]);

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTouched({ name: false, email: false, subject: false, message: false });
    setErrors({});
    setStatus('idle');
  };

  const handleClose = () => {
    onClose();
    window.setTimeout(reset, 250);
  };

  const handleBlur = (field: FieldName) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    const errs = runValidation();
    setErrors(errs);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errs).length > 0) return;

    const finalSubject = subject.trim() || t.defaultSubject[lang];

    setStatus('sending');
    try {
      const res = await fetch(links.contactForm, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: finalSubject,
          message: message.trim(),
          _subject: finalSubject,
          _replyto: email.trim(),
        }),
      });
      if (!res.ok) throw new Error('send-failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const showError = (field: FieldName) => (touched[field] ? errors[field] : undefined);

  if (status === 'success') {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        title={t.success.title[lang]}
        description={t.success.body[lang]}
      >
        <div className="flex flex-col items-center gap-7 py-3 text-center">
          <SuccessCheck />
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex h-10 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t.done[lang]}
          </motion.button>
        </div>
      </Modal>
    );
  }

  const sending = status === 'sending';

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={t.title[lang]}
      description={t.intro[lang]}
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label={t.fields.name[lang]}
            value={name}
            onChange={setName}
            onBlur={handleBlur('name')}
            placeholder={t.placeholders.name[lang]}
            autoComplete="name"
            maxLength={LIMITS.NAME_MAX}
            required
            error={showError('name')}
          />
          <Field
            label={t.fields.email[lang]}
            type="email"
            value={email}
            onChange={setEmail}
            onBlur={handleBlur('email')}
            placeholder={t.placeholders.email[lang]}
            autoComplete="email"
            maxLength={LIMITS.EMAIL_MAX}
            required
            error={showError('email')}
          />
        </div>

        <Field
          label={t.fields.subject[lang]}
          value={subject}
          onChange={setSubject}
          onBlur={handleBlur('subject')}
          placeholder={t.placeholders.subject[lang]}
          maxLength={LIMITS.SUBJECT_MAX}
          error={showError('subject')}
        />

        <FieldArea
          label={t.fields.message[lang]}
          value={message}
          onChange={setMessage}
          onBlur={handleBlur('message')}
          placeholder={t.placeholders.message[lang]}
          maxLength={LIMITS.MESSAGE_MAX}
          required
          error={showError('message')}
          counterLabel={t.counter[lang]}
        />

        {status === 'error' ? (
          <p
            role="alert"
            className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs leading-relaxed text-rose-600 dark:text-rose-300"
          >
            {t.sendError[lang]}
          </p>
        ) : (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {t.hint[lang]}
          </p>
        )}

        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            disabled={sending}
            className="inline-flex h-10 items-center rounded-full px-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-muted-foreground"
          >
            {t.cancel[lang]}
          </button>
          <button
            type="submit"
            disabled={sending}
            aria-busy={sending || undefined}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-foreground disabled:hover:text-background"
          >
            {sending ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
            )}
            {sending ? t.sending[lang] : t.send[lang]}
          </button>
        </div>
      </form>
    </Modal>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  error?: string;
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  required,
  autoComplete,
  maxLength,
  error,
}: FieldProps) {
  const errorId = useId();
  const hasError = Boolean(error);

  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        className={cn(
          'h-11 rounded-lg border bg-background px-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/55 focus:outline-none',
          hasError
            ? 'border-rose-500/70 focus:border-rose-500'
            : 'border-border focus:border-foreground',
        )}
      />
      {hasError && (
        <span
          id={errorId}
          role="alert"
          className="font-mono text-[10px] tracking-wide text-rose-500 dark:text-rose-400"
        >
          {error}
        </span>
      )}
    </label>
  );
}

interface FieldAreaProps extends Omit<FieldProps, 'type' | 'autoComplete'> {
  counterLabel?: string;
}

function FieldArea({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  maxLength,
  error,
  counterLabel,
}: FieldAreaProps) {
  const errorId = useId();
  const hasError = Boolean(error);
  const showCounter = typeof maxLength === 'number';
  const overWarn = showCounter && maxLength! - value.length <= 200;

  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-baseline justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </span>
        {showCounter && (
          <span
            aria-hidden
            className={cn(
              'transition-colors',
              overWarn ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            {value.length}/{maxLength} {counterLabel}
          </span>
        )}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        rows={5}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        className={cn(
          'resize-none rounded-lg border bg-background p-3 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground/55 focus:outline-none',
          hasError
            ? 'border-rose-500/70 focus:border-rose-500'
            : 'border-border focus:border-foreground',
        )}
      />
      {hasError && (
        <span
          id={errorId}
          role="alert"
          className="font-mono text-[10px] tracking-wide text-rose-500 dark:text-rose-400"
        >
          {error}
        </span>
      )}
    </label>
  );
}


function SuccessCheck() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none h-16 w-16 text-accent"
      aria-hidden
    >
      <motion.path
        d="M7 17 L13.5 23 L25 11"
        stroke="currentColor"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.12 },
        }}
      />
    </svg>
  );
}