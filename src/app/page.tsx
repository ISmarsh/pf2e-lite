import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-2 text-3xl font-bold text-stone-900">PF2e Lite</h1>
      <p className="mb-6 text-lg text-stone-600">
        A streamlined Pathfinder 2e variant for levels 1-10.
      </p>

      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>Status:</strong> Design Skeleton (v0.1 Draft). These rules are in active development
        and have not been playtested.
      </div>

      <section className="space-y-4 text-stone-700">
        <h2 className="text-xl font-semibold text-stone-900">What is this?</h2>
        <p>
          PF2e Lite preserves Pathfinder 2e&apos;s core math and tactical depth while simplifying
          its subsystems. Designed for the Adventurer tier (levels 1-10), it replaces Vancian
          spellcasting with a mana pool, consolidates 40+ conditions into 20, and redesigns crafting
          to be faster and more rewarding.
        </p>

        <h2 className="text-xl font-semibold text-stone-900">Key changes</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Mana replaces Vancian slots</strong> — cost curve 1/2/4/7/11 for ranks 1-5
          </li>
          <li>
            <strong>20 conditions</strong> — down from 40+, with two-tier detection
          </li>
          <li>
            <strong>Three-box dying</strong> — visual checkboxes with baked-in wounded escalation
          </li>
          <li>
            <strong>Simplified shields</strong> — block value + durability ticks
          </li>
          <li>
            <strong>Redesigned crafting</strong> — 25% material cost, proficiency-based speed
          </li>
          <li>
            <strong>12 classes</strong> — 4 martial, 4 full caster, 4 empowered
          </li>
        </ul>
      </section>

      <div className="mt-8">
        <Link
          href="/rules/00-overview"
          className="inline-block rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700"
        >
          Read the rules
        </Link>
      </div>
    </div>
  );
}
