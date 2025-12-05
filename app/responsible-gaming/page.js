export default function ResponsibleGaming() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">

      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Safety
        </p>

        <h1 className="section-title">Responsible Gaming</h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl">
          WhichSlot.com promotes responsible gaming. Our tools are designed for 
          entertainment purposes only and should never be used as a way to make 
          money or solve financial problems.
        </p>
      </header>

      {/* STAY IN CONTROL */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Stay in Control</h2>

        <ul className="space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Only gamble if you are 18+ or of legal age in your country.</li>
          <li>• Never wager more than you can afford to lose.</li>
          <li>• Set limits on the time and money you spend gambling.</li>
          <li>• Do not chase losses under any circumstances.</li>
          <li>• Take regular breaks while gambling online.</li>
        </ul>
      </section>

      {/* WHEN GAMBLING STOPS BEING FUN */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          If Gambling Stops Being Fun
        </h2>

        <p className="text-gray-300">
          If gambling begins to impact your well-being, relationships, or financial 
          stability, it may be time to seek help. The organizations below provide 
          free, confidential support:
        </p>

        <ul className="space-y-2 text-sm md:text-base">
          <li>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              className="link-clean underline-offset-2 hover:underline"
            >
              BeGambleAware (UK)
            </a>
          </li>

          <li>
            <a
              href="https://www.gamblersanonymous.org/"
              target="_blank"
              className="link-clean underline-offset-2 hover:underline"
            >
              Gamblers Anonymous
            </a>
          </li>

          <li>
            <a
              href="https://www.responsiblegambling.org/"
              target="_blank"
              className="link-clean underline-offset-2 hover:underline"
            >
              Responsible Gambling Council
            </a>
          </li>
        </ul>
      </section>

      {/* FOOTNOTE */}
      <p className="text-gray-500 text-[11px] leading-relaxed">
        If you believe someone under 18 is accessing online gambling platforms, 
        please contact the appropriate authorities in your region.
      </p>
    </div>
  );
}
