export default function Legal() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
      
      {/* Page Title */}
      <header>
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400 mb-2">
          WhichSlot · Legal
        </p>

        <h1 className="section-title">Legal & Affiliate Disclosure</h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl">
          WhichSlot.com is an independent slot discovery tool. We do not operate 
          an online casino and we do not provide real-money gambling services.
        </p>
      </header>

      {/* Affiliate Disclosure */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          Affiliate Disclosure
        </h2>

        <p className="text-gray-300">
          Some links on this website are affiliate links. This means we may earn 
          a commission if you click a link and sign up or play at a partner casino. 
          This comes at no additional cost to you.
        </p>

        <p className="text-gray-300">
          We only reference casinos we believe are reputable and safe; however, 
          experiences and results vary from user to user. Gambling always carries risk.
        </p>
      </section>

      {/* No Guarantee */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          No Guarantee of Results
        </h2>

        <p className="text-gray-300">
          Slots and casino games are games of chance. The outcomes shown by our 
          slot spinner are for entertainment only and cannot predict future results. 
          We do not guarantee any winnings or gameplay outcomes.
        </p>
      </section>

      {/* Age Restriction */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          Age Restriction
        </h2>

        <p className="text-gray-300">
          WhichSlot.com is intended only for users aged 18+ or the legal gambling 
          age in their jurisdiction. By using this website, you confirm that you 
          meet these requirements.
        </p>
      </section>

      {/* Liability */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          Liability
        </h2>

        <p className="text-gray-300">
          We aim to provide accurate, useful information, but cannot guarantee 
          completeness or accuracy. We are not responsible for any losses, damages, 
          or issues resulting from gambling activities, casino usage, or decisions 
          made based on our slot recommendations.
        </p>
      </section>

      {/* Footer Note */}
      <p className="text-gray-500 text-[11px] leading-relaxed">
        This disclosure may be updated periodically to reflect regulatory changes 
        or updates in our business practices.
      </p>
    </div>
  );
}
