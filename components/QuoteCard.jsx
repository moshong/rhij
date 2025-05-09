import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const QuoteCard = ({ text, styles }) => (
  <div className={`${styles} absolute flex items-center px-2 py-6 sm:px-8 sm:py-12 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5/6 max-w-[400px] bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg z-50 shadow-xl`}>
    <div className="flex flex-row items-center justify-center h-fit gap-2">
      <RiDoubleQuotesL size={50} className="text-white/80 mb-auto" />
      <p className="text-white italic text-[20px] lg:text-[22px] text-center w-fit py-4 font-medium">{text}</p>
      <RiDoubleQuotesR size={50} className="text-white/80 mt-auto" />
    </div>
  </div>
);

export default QuoteCard;
