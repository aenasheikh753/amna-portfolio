export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-primary)]/10 text-center relative z-10 bg-[var(--color-background)]">
      <p className="text-sm text-[var(--color-text-light)]">
        © {new Date().getFullYear()} Amna Syed. All rights reserved 🌿
      </p>
    </footer>
  );
}
