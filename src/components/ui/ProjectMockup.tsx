import type { ProjectKind } from '@/data/projects';
import { motion } from 'framer-motion';

interface Props {
  kind: ProjectKind;
}

/**
 * Abstract geometric mockup per project kind.
 * Pure CSS/SVG so cards stay fast and dependency-free.
 */
export function ProjectMockup({ kind }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted/60 to-surface">
      {/* hairline grid */}
      <div className="absolute inset-0 grid-hairlines opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

      <div className="relative h-full w-full p-5">
        {kind === 'saas' && <SaasMock />}
        {kind === 'erp' && <ErpMock />}
        {kind === 'fullstack' && <FullStackMock />}
      </div>
    </div>
  );
}

function SaasMock() {
  const bars = [42, 64, 38, 78, 52, 88, 60];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-foreground/30" />
        </div>
        <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          analytics
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'MRR', value: '$24.8k', delta: '+12%' },
          { label: 'Users', value: '8,402', delta: '+4%' },
          { label: 'Churn', value: '1.2%', delta: '−0.3' },
        ].map((m) => (
          <div key={m.label} className="rounded-md border border-border bg-surface/80 p-2">
            <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
              {m.label}
            </div>
            <div className="mt-1 text-[12px] font-medium text-foreground">{m.value}</div>
            <div className="font-mono text-[8px] text-accent">{m.delta}</div>
          </div>
        ))}
      </div>

      <div className="relative flex-1 rounded-md border border-border bg-surface/60 p-3">
        <div className="flex h-full items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0.6, opacity: 0.4 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="origin-bottom flex-1 rounded-sm bg-gradient-to-t from-accent/70 to-accent/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <svg className="absolute inset-3 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points="0,70 15,55 30,62 50,40 65,48 80,28 100,32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-foreground/60"
          />
        </svg>
      </div>
    </div>
  );
}

function ErpMock() {
  const rows = [
    { id: '#1042', name: 'Costa Holdings', status: 'paid' },
    { id: '#1041', name: 'Atlas LLC', status: 'pending' },
    { id: '#1040', name: 'Northwind Co.', status: 'paid' },
    { id: '#1039', name: 'Wayne Industries', status: 'review' },
  ];
  return (
    <div className="grid h-full grid-cols-[80px_1fr] gap-3">
      <div className="flex flex-col gap-1 rounded-md border border-border bg-surface/80 p-2">
        {['Dashboard', 'Pedidos', 'Clientes', 'Relatórios', 'Config.'].map((it, i) => (
          <div
            key={it}
            className={`rounded px-1.5 py-1 text-[9px] ${i === 1 ? 'bg-accent/15 text-accent' : 'text-muted-foreground'}`}
          >
            {it}
          </div>
        ))}
      </div>
      <div className="flex flex-col rounded-md border border-border bg-surface/80 p-2">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[10px] font-medium">Pedidos recentes</div>
          <div className="font-mono text-[8px] text-muted-foreground">4 / 128</div>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center justify-between py-1.5">
              <div className="font-mono text-[9px] text-muted-foreground">{r.id}</div>
              <div className="text-[10px] text-foreground">{r.name}</div>
              <span
                className={`font-mono text-[8px] uppercase ${
                  r.status === 'paid'
                    ? 'text-emerald-500'
                    : r.status === 'pending'
                      ? 'text-accent'
                      : 'text-secondary'
                }`}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FullStackMock() {
  return (
    <div className="flex h-full flex-col gap-2 font-mono text-[10px] leading-relaxed">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-[9px] uppercase tracking-widest">api/auth.ts</span>
      </div>
      <div className="flex-1 rounded-md border border-border bg-surface/80 p-3">
        <pre className="whitespace-pre-wrap break-words text-foreground/85">
{`export const POST = async (req) => {
  const { email, pwd } = await req.json();
  const user = await users.find(email);
  if (!verify(user, pwd))
    return reply(401);
  return reply.json({
    token: sign(user.id),
  });
};`}
        </pre>
      </div>
      <div className="flex gap-2 text-[9px]">
        <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-muted-foreground">200 OK</span>
        <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-muted-foreground">42ms</span>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">JWT</span>
      </div>
    </div>
  );
}

