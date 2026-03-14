const clipPaths = {
  topLeft:
    "M0.941,0.199 C1,0.306,1,0.775,0.909,0.857 C0.81,0.939,0.354,1,0.239,0.986 C0.125,0.936,0,0.648,0,0.569 C0,0.463,0.082,0.068,0.197,0.017 C0.337,-0.044,0.823,0.069,0.941,0.199",
  middleLeft:
    "M0.924,0.106 C0.986,0.152,1,0.253,1,0.324 C1,0.395,0.824,0.999,0.622,1 C0.415,1,0.162,0.843,0.042,0.663 C-0.018,0.573,-0.001,0.324,0.018,0.252 C0.037,0.18,0.157,0.03,0.24,0.005 C0.33,-0.022,0.863,0.061,0.924,0.106",
  topRight:
    "M0.704,0.043 C0.64,0.017,0.448,-0.023,0.349,0.018 C0.245,0.062,0.117,0.317,0.072,0.418 C0.028,0.519,-0.027,0.818,0.016,0.897 C0.045,0.95,0.109,1,0.242,0.979 C0.411,0.898,0.976,0.458,0.999,0.381 C1,0.305,0.768,0.069,0.704,0.043",
  bottomRight:
    "M0.996,0.23 C1,0.296,0.946,0.473,0.861,0.648 C0.776,0.823,0.71,0.984,0.613,0.999 C0.519,1,0.337,0.862,0.218,0.735 C0.131,0.643,0.048,0.549,0.025,0.502 C-0.013,0.426,-0.006,0.312,0.038,0.257 C0.085,0.197,0.175,0.204,0.417,0.139 C0.602,0.089,0.668,-0.008,0.76,0 C0.837,0.007,0.975,0.164,0.996,0.23",
  bottomLeft:
    "M0.517,0 C0.58,0.003,0.64,0.02,0.694,0.049 C0.747,0.079,0.791,0.12,0.821,0.169 C0.868,0.245,1,0.955,0.955,0.996 C0.842,1,0.7,0.869,0.453,0.806 C0.218,0.747,0.032,0.737,0.003,0.628 C-0.025,0.519,0.134,0.188,0.202,0.126 C0.285,0.05,0.398,0.005,0.517,0",
};

function Stone({ id, path, className, style, children }) {
  return (
    <>
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      <div className={className} style={{ clipPath: `url(#${id})`, ...style }}>
        {children}
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#00373E] rounded-2xl mx-4 md:mx-6 mb-4">
      <div className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center py-12 px-4">
        {/* Left stones */}
        <div className="absolute left-0 top-0 h-full w-[200px] md:w-[280px] pointer-events-none">
          <Stone
            id="s-tl"
            path={clipPaths.topLeft}
            className="absolute top-0 -left-2 w-[180px] h-[200px] md:w-[240px] md:h-[260px] bg-[#FBD3B6]"
          >
            <img
              src="/hero1.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </Stone>

          <Stone
            id="s-ml"
            path={clipPaths.middleLeft}
            className="absolute top-[35%] -left-4 w-[140px] h-[160px] md:w-[180px] md:h-[200px] bg-[#94954C]"
          />

          <Stone
            id="s-bl"
            path={clipPaths.bottomLeft}
            className="absolute bottom-0 left-2 w-[160px] h-[180px] md:w-[200px] md:h-[240px] bg-[#FBD3B6]"
          >
            <img
              src="/playing.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </Stone>
        </div>

        {/* Right stones */}
        <div className="absolute right-0 top-0 h-full w-[160px] md:w-[240px] pointer-events-none">
          <Stone
            id="s-tr"
            path={clipPaths.topRight}
            className="absolute -top-4 -right-2 w-[160px] h-[220px] md:w-[220px] md:h-[300px] bg-[#AEEEE6]"
          />

          <Stone
            id="s-br"
            path={clipPaths.bottomRight}
            className="absolute bottom-0 -right-2 w-[150px] h-[200px] md:w-[200px] md:h-[260px] bg-[#FBD3B6]"
          >
            <img
              src="/baby.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </Stone>
        </div>

        {/* Copy */}
        <div className="relative z-10 text-center max-w-[500px] md:max-w-[560px] mx-auto px-8">
          <h1 className="font-display text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
            Build a care career that cares about you
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            We want to get you the job and the pay you deserve.
          </p>
          <a
            href="#"
            className="inline-block bg-[#AEEEE6] text-[#00373E] font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#fbd3b6] transition-colors"
          >
            Create a free profile
          </a>
        </div>
      </div>
    </section>
  );
}
