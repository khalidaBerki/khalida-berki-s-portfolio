export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        <p>
          Conçu avec <span className="text-primary">passion</span>
        </p>
      </div>
    </footer>
  )
}
