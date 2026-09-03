export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian text-text-primary flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <p className="text-gold text-sm uppercase tracking-widest mb-2">404</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Page not found
          </h1>
          <p className="text-text-secondary text-lg">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gold text-obsidian rounded-sm font-medium hover:bg-amber transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
