const Banner = () => {
  return (
    <div className="pt-[217px] h-[900px] border-b-2 mb-14 ps-[80px]">
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
      <div className="flex mt-[44px] gap-4">
        <button className="w-[216px] px-6 py-[10px] rounded-[32px] bg-[#0078FF] active:bg-[#003a7c] hover:bg-[#0157b9] border border-[#0078FF] font-bold text-white">
          Get free Consultation
        </button>
        <button className="w-[216px] flex gap-2 justify-center items-center btn-outline px-6  py-[10px] rounded-[32px] border border-black font-bold">
          Explore Services{" "}
          <svg
            className="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 2.04938V4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM18.7071 6.70711L12 13.4142L10.5858 12L17.2929 5.29289L14 2H22V10L18.7071 6.70711Z"
              fill="#14171A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
