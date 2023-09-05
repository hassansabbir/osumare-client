const Banner = () => {
  return (
    <div className="pt-[217px] h-[900px                ] ps-[80px]">
      <p className="text-xs font-bold w-[220px]">
        <span className="text-[#0078FF]">$100M+</span> revenue Generated
      </p>
      <h2 className="text-[56px] w-[518px] font-bold">
        Discover the <br /> <span className="text-[#0078FF]">Power</span> of
        Data Driven Marketing
      </h2>
      <p className="w-[400px] font-[18px]">
        Pushing boundaries of digital marketing to make your brand stand out
        with our out-of-the-box marketing skills! Since we know every second is
        valuable, we strive for quick delivery of results.
      </p>
      <div className="flex gap-4">
        <button className="w-[216px] px-6 py-[10px] rounded-[32px] border bg-[#0078FF] font-bold text-white">
          Get free Consultation
        </button>
        <button className="w-[216px] px-6 py-[10px] rounded-[32px] border border-black font-bold">
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Banner;
