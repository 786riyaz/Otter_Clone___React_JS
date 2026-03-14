import OtterLogo from "./OtterLogo";

const blobLeft =
  "M0.955,0.125 C0.926,0.069,0.871,-0.001,0.794,0 C0.718,0.001,0.182,0.255,0.108,0.331 C0.041,0.4,-0.01,0.589,0.002,0.657 C0.014,0.725,0.101,0.929,0.195,0.964 C0.383,1,0.685,1,0.88,0.879 C1,0.758,0.985,0.18,0.955,0.125";
const blobRight =
  "M0,0.676 C0,0.747,0.014,0.848,0.076,0.894 C0.129,0.933,0.533,1,0.701,1 C0.728,1,0.748,0.998,0.76,0.995 C0.843,0.97,0.963,0.82,0.982,0.748 C0.991,0.714,1,0.639,1,0.561 C1,0.474,0.99,0.384,0.958,0.337 C0.838,0.157,0.585,0,0.378,0 C0.176,0.001,0,0.605,0,0.676";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 pt-6 pb-8">
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="f-left" clipPathUnits="objectBoundingBox">
            <path d={blobLeft} />
          </clipPath>
          <clipPath id="f-right" clipPathUnits="objectBoundingBox">
            <path d={blobRight} />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
        {/* CTA card */}
        <div className="relative overflow-hidden bg-[#00373E] rounded-2xl p-8 md:p-10 flex-1">
          <div className="relative z-10">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Build a care career that loves you back
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
              Level up your care career: gain access to the best care jobs,
              maximize your earnings, and unlock your potential.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00373E] text-[#FFFFFF] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#fbd3b6] transition-colors"
            >
              Get started
            </a>
          </div>
          <div
            className="absolute -bottom-5 -left-5 w-40 h-44 bg-[#94954C]"
            style={{ clipPath: "url(#f-left)" }}
          />
        </div>

        {/* Logo + links card */}
        <div className="relative overflow-hidden bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between flex-1 min-h-[200px]">
          <div className="flex justify-end">
            <a href="/">
              <OtterLogo />
            </a>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 text-sm text-[#00373E]/50 flex-wrap">
              <a href="#" className="hover:text-[#00373E] transition-colors">
                Terms of Use
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#00373E] transition-colors">
                Privacy Policy
              </a>
            </div>
            <p className="text-sm text-[#00373E]/40 mt-1">
              © 2025 With Otter Inc.
            </p>
          </div>
          <div
            className="absolute -top-5 -right-5 w-36 h-44 bg-[#FBD3B6]"
            style={{ clipPath: "url(#f-right)" }}
          />
        </div>
      </div>
    </footer>
  );
}
