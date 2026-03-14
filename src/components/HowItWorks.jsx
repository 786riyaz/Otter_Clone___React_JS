const steps = [
  {
    n: "1",
    title: "Get started",
    body: "We like to keep it simple. Tell us your name, contact information, and a little bit about your childcare experience and what you're looking for in your next role.",
  },
  {
    n: "2",
    title: "Give us a call",
    body: "Meet Autumn, our AI assistant, who asks you all the right questions to understand your strengths and help you present your best self in just minutes!",
  },
  {
    n: "3",
    title: "Share your profile",
    body: "Showcase your best self everywhere you apply with your portable, customized profile, designed to help you shine.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div className="max-w-sm">
            <span className="block text-xs font-semibold uppercase tracking-widest text-[#00373E]/50 mb-3">
              How it works
            </span>
            <h2 className="text-[#00373E] text-3xl md:text-4xl font-bold leading-snug">
              A profile that feels like you, because it is
            </h2>
          </div>
          <img src="/work.webp" alt="" className="md:block w-48" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="bg-white rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-full bg-[#FBD3B6] flex items-center justify-center text-[#00373E] font-bold mb-4">
                {n}
              </div>
              <h3 className="text-[#00373E] text-lg font-bold mb-2">{title}</h3>
              <p className="text-[#00373E]/60 text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#00373E] text-2xl md:text-3xl font-bold mb-2">
              We want to help you grow
            </h3>
            <p className="text-[#00373E]/60 text-base mb-6">
              We want to help you build a sustainable, rewarding career.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00373E] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#fbd3b6] hover:text-black transition-opacity"
            >
              Join Otter
            </a>
          </div>

          {/* Abstract peach person shape */}
          <div className="relative w-40 h-44 flex-shrink-0">
            <div className="absolute top-0 right-6 w-16 h-16 bg-[#FBD3B6] rounded-full" />
            <div
              className="absolute top-10 right-0 w-24 h-28 bg-[#FBD3B6]"
              style={{ borderRadius: "50% 50% 40% 40%" }}
            />
            <div
              className="absolute top-6 right-[72px] w-8 h-12 bg-[#FBD3B6]"
              style={{ borderRadius: "60% 40% 50% 50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
