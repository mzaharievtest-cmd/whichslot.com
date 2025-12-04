export default function ResponsibleGaming() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Responsible Gaming</h1>

      <p className="text-gray-300 mb-6">
        WhichSlot.com promotes responsible gaming. Our tool is designed for
        entertainment purposes only and should never be used as a way to make
        money or solve financial problems.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">Stay in Control</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Only gamble if you are 18+ or of legal age in your country.</li>
        <li>Never wager more than you can afford to lose.</li>
        <li>Set limits on time and money spent on gambling.</li>
        <li>Do not chase losses.</li>
        <li>Take frequent breaks when gambling online.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">If Gambling Stops Being Fun</h2>
      <p className="text-gray-300 mb-4">
        If you feel that gambling is affecting your life or becoming difficult 
        to control, seek help immediately. Here are reputable organizations that 
        provide free support:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            className="text-neonPurple hover:underline"
          >
            BeGambleAware (UK)
          </a>
        </li>
        <li>
          <a
            href="https://www.gamblersanonymous.org/"
            target="_blank"
            className="text-neonPurple hover:underline"
          >
            Gamblers Anonymous
          </a>
        </li>
        <li>
          <a
            href="https://www.responsiblegambling.org/"
            target="_blank"
            className="text-neonPurple hover:underline"
          >
            Responsible Gambling Council
          </a>
        </li>
      </ul>

      <p className="text-gray-400 text-sm mt-10">
        If you believe someone under 18 is accessing online gambling, please 
        contact the appropriate authorities in your region.
      </p>
    </div>
  );
}
