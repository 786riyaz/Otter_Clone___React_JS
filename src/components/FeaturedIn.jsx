const logos = [
  { label: "Forbes", font: "Georgia, serif", size: 28, width: 120 },
  { label: "Parents.", font: "Georgia, serif", size: 26, width: 130 },
  {
    label: "The New York Times",
    font: "'Times New Roman', serif",
    size: 20,
    width: 230,
  },
  { label: "MOM", font: "Georgia, serif", size: 24, width: 80 },
];

function Logo({ label, font, size, width }) {
  return (
    <svg
      viewBox={`0 0 ${width} 32`}
      className="h-6 md:h-7 w-auto fill-[#00373E]"
    >
      <text x="0" y="26" fontFamily={font} fontSize={size} fontWeight="bold">
        {label}
      </text>
    </svg>
  );
}

export default function FeaturedIn() {
  return (
    <section className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto bg-[#FBD3B6] rounded-2xl px-8 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#00373E]/50 mb-6">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((l) => (
            <Logo key={l.label} {...l} />
          ))}
        </div>
      </div>
    </section>
  );
}
