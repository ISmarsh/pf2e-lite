export function App() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-2 text-3xl font-bold text-stone-900">PF2e Lite Character Builder</h1>
      <p className="mb-8 text-stone-600">
        A streamlined Pathfinder 2e character builder for levels 1-10.
      </p>

      <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
        <h2 className="mb-2 text-lg font-semibold text-stone-800">Under Construction</h2>
        <p className="text-stone-600">
          The character builder is in early development. Check back soon.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-stone-500">
          <li>Ancestry, heritage, and background selection</li>
          <li>12-class roster with subclass support</li>
          <li>Mana-based spellcasting for full casters</li>
          <li>Three feat tracks + Free Archetype</li>
          <li>Equipment and crafting</li>
        </ul>
      </div>
    </div>
  );
}
