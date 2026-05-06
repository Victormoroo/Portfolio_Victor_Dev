type ClassValue = string | number | boolean | null | undefined | ClassValue[];

export function cn(...args: ClassValue[]): string {
  const out: string[] = [];
  for (const a of args) {
    if (!a) continue;
    if (Array.isArray(a)) out.push(cn(...a));
    else if (typeof a === 'string' || typeof a === 'number') out.push(String(a));
  }
  return out.join(' ');
}
