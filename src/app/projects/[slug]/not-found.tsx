export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian text-text-primary flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-display font-bold text-gold">404</h1>
        <p className="text-text-secondary text-xl">Project not found</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-gold text-obsidian rounded-sm font-medium hover:bg-amber transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
