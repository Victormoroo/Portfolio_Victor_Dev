import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Modal } from './Modal';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  const { lang } = useLanguage();
  const t = content.contact.modal;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleClose = () => {
    onClose();
    // small delay so the form does not flash empty during the close animation
    window.setTimeout(reset, 250);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalSubject = subject.trim() || t.defaultSubject[lang];
    const body = [
      `${t.fields.name[lang]}: ${name}`,
      `${t.fields.email[lang]}: ${email}`,
      '',
      message,
    ].join('\n');

    const url = `mailto:${links.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={t.title[lang]}
      description={t.intro[lang]}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label={t.fields.name[lang]}
            value={name}
            onChange={setName}
            placeholder={t.placeholders.name[lang]}
            autoComplete="name"
            required
          />
          <Field
            label={t.fields.email[lang]}
            type="email"
            value={email}
            onChange={setEmail}
            placeholder={t.placeholders.email[lang]}
            autoComplete="email"
            required
          />
        </div>

        <Field
          label={t.fields.subject[lang]}
          value={subject}
          onChange={setSubject}
          placeholder={t.placeholders.subject[lang]}
        />

        <FieldArea
          label={t.fields.message[lang]}
          value={message}
          onChange={setMessage}
          placeholder={t.placeholders.message[lang]}
          required
        />

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {t.hint[lang]}
        </p>

        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-10 items-center rounded-full px-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {t.cancel[lang]}
          </button>
          <button
            type="submit"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
            {t.send[lang]}
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
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({ label, value, onChange, placeholder, type = 'text', required, autoComplete }: FieldProps) {
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
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/55 focus:border-foreground focus:outline-none"
      />
    </label>
  );
}

function FieldArea({ label, value, onChange, placeholder, required }: Omit<FieldProps, 'type' | 'autoComplete'>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="resize-none rounded-lg border border-border bg-background p-3 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground/55 focus:border-foreground focus:outline-none"
      />
    </label>
  );
}
