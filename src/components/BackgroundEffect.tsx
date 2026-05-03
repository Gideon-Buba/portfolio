/**
 * Aurora background — three elliptical blobs that slowly rotate
 * in full 360° arcs, creating a swirling northern-lights feel.
 * Pure CSS animations, zero extra dependencies.
 *
 * Blob colours:
 *   1. Brand yellow-green  oklch(0.91 0.17 116) — #D3E97A
 *   2. Blue complement     oklch(0.65 0.20 250) — ~#4A7CC4
 *   3. Soft purple         oklch(0.68 0.18 300) — ~#9B5FA8
 */
export function BackgroundEffect() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* ── Blob 1: brand green, top-left, 28s CW ──────────── */}
      <div
        className="absolute will-change-transform
                   opacity-[0.08] dark:opacity-[0.11]"
        style={{
          width: "85vw",
          height: "65vh",
          top: "-25vh",
          left: "-20vw",
          borderRadius: "42% 58% 55% 45% / 52% 44% 56% 48%",
          background:
            "radial-gradient(ellipse at center, oklch(0.91 0.17 116) 0%, transparent 72%)",
          filter: "blur(90px)",
          animation: "aurora-1 28s ease-in-out infinite",
        }}
      />

      {/* ── Blob 2: blue, top-right, 22s CCW ───────────────── */}
      <div
        className="absolute will-change-transform
                   opacity-[0.06] dark:opacity-[0.08]"
        style={{
          width: "65vw",
          height: "75vh",
          top: "-15vh",
          right: "-22vw",
          borderRadius: "58% 42% 45% 55% / 45% 55% 45% 55%",
          background:
            "radial-gradient(ellipse at center, oklch(0.65 0.20 250) 0%, transparent 72%)",
          filter: "blur(100px)",
          animation: "aurora-2 22s ease-in-out infinite",
        }}
      />

      {/* ── Blob 3: purple, bottom-centre, 35s CW ──────────── */}
      <div
        className="absolute will-change-transform
                   opacity-[0.05] dark:opacity-[0.07]"
        style={{
          width: "80vw",
          height: "55vh",
          bottom: "-18vh",
          left: "5vw",
          borderRadius: "50% 50% 38% 62% / 60% 42% 58% 40%",
          background:
            "radial-gradient(ellipse at center, oklch(0.68 0.18 300) 0%, transparent 72%)",
          filter: "blur(110px)",
          animation: "aurora-3 35s ease-in-out infinite",
        }}
      />
    </div>
  )
}
