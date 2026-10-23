const Guarantee = ({ title, text, index }) => (
  <div className="flex flex-row gap-6 py-6 border-t border-[#2B2220]/10 dark:border-white/10">
    <span className="font-playfair text-[28px] leading-none text-palette-2 w-10 shrink-0">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="flex flex-col flex-1">
      <h3 className="font-playfair text-[20px] text-[#2B2220] dark:text-white pb-2">
        {title}
      </h3>
      <p className="font-normal text-[15px] leading-7">
        {text}
      </p>
    </div>
  </div>
);

export default Guarantee;
