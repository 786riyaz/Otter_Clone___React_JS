export default function BetaBanner() {
  return (
    <section className="px-4 md:px-6 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <img
            src="/beta-illustration.svg"
            alt=""
            className="w-44 md:w-52 flex-shrink-0"
          />

          <div className="flex flex-col gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#00373E] bg-[#AEEEE6] px-3 py-1 rounded-full mb-3">
                Now in Beta
              </span>
              <h2 className="text-[#00373E] text-2xl md:text-3xl font-bold">
                Become a founding caregiver
              </h2>
            </div>
            <p className="text-[#00373E]/70 text-base leading-relaxed">
              Join Otter now and Otter will be free for you forever, even if we
              introduce paid plans.
            </p>
            <a
              href="#"
              className="self-start border-2 border-[#00373E] text-[#00373E] font-semibold text-sm px-6 py-3 rounded-full transition-all"
            >
              Create a free profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
