const items = [
  'Board-certified nurse practitioner',
  'Personalized consultations',
  'Medical-grade skincare',
  'Cedar Rapids, Iowa',
  'Evidence-based care',
];

// Content is repeated so the -50% translate loops seamlessly.
const Ticker = () => (
  <div className="ticker overflow-hidden border-y border-[#2B2220]/10 dark:border-white/10 bg-palette-5 dark:bg-dark-bg py-5" aria-hidden="true">
    <div className="ticker-track">
      {[0, 1].map((n) => (
        <div key={n} className="flex shrink-0 items-center">
          {items.map((item) => (
            <span key={item} className="flex items-center whitespace-nowrap text-[12px] uppercase tracking-[0.3em] text-[#2B2220]/70 dark:text-white/70">
              {item}
              <span className="mx-10 h-1 w-1 rounded-full bg-palette-2" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Ticker;
