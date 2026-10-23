const QuoteCard = ({ text, styles }) => (
  <div className={`${styles} absolute bottom-0 left-0 right-0 px-6 py-8 sm:px-10 sm:py-10 bg-gradient-to-t from-black/70 to-transparent z-50`}>
    <p className="font-playfair italic text-white text-[20px] lg:text-[24px] leading-snug max-w-[420px]">{text}</p>
  </div>
);

export default QuoteCard;
