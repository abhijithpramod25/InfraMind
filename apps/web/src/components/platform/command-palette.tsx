'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { navigationItems } from '@/constants/navigation';

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const commands = useMemo(
    () => navigationItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  if (!isOpen) return null;
  const navigate = (href: string) => {
    router.push(href);
    onClose();
    setQuery('');
  };
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-start bg-black/45 px-4 pt-[15vh]"
      role="dialog"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        initial={{ opacity: 0, y: -8 }}
      >
        <label className="flex items-center gap-3 border-b border-line px-4">
          <Search aria-hidden="true" className="text-muted" size={18} />
          <input
            autoFocus
            className="h-13 w-full bg-transparent text-sm outline-none placeholder:text-muted"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages and commands..."
            value={query}
          />
        </label>
        <div className="p-2">
          <p className="px-2 py-2 text-xs font-medium uppercase tracking-wide text-muted">
            Navigate
          </p>
          {commands.map((command) => (
            <button
              className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm hover:bg-panel"
              key={command.href}
              onClick={() => navigate(command.href)}
              type="button"
            >
              <command.icon aria-hidden="true" className="text-muted" size={17} />
              <span>{command.label}</span>
              <span className="ml-auto text-xs text-muted">{command.description}</span>
            </button>
          ))}
          {commands.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted">No matching pages.</p>
          )}
        </div>
        <div className="border-t border-line px-4 py-3 text-xs text-muted">
          Future actions will appear here as platform capabilities are enabled.
        </div>
      </motion.div>
    </div>
  );
}
