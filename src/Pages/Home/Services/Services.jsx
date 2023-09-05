import rainbowAppLogo from "../../../assets/rainbow-app-icon.png";
import brandingIcon from "../../../assets/BrandingIcon.png";
// import developmentIcon from "../../../assets/DevlopmentIcon.png";
// import marketingIcon from "../../../assets/MarketingIcon.png";

const Services = () => {
  return (
    <div className="px-20 mb-10">
      <div>
        <img src={rainbowAppLogo} className="w-[42px] h-[42px]" alt="" />
        <h2 className="text-[32px] font-bold">Our Services</h2>
        <p className="w-[579px] text-lg">
          Striving for better business with convenience, we create simple yet
          effective and powerful plans tailored for you; We offer:
        </p>
      </div>

      {/* fliping cards start from here */}

      <div className="mt-16 flex justify-between">
        <div className="group h-[252px] w-[372px] bg-[#F8F6F9] hover:bg-white hover:shadow-2xl hover:shadow-blue-200 rounded-3xl border border-slate-200 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl px-4 py-6 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:delay-[0.5s] ">
            <div className="absolute flex flex-col items-center justify-center inset-0">
              <img src={brandingIcon} alt="" />
              <h2 className="text-[24px] font-bold">Branding services</h2>
            </div>
            <div className="absolute flex flex-col items-center rounded-3xl justify-center inset-0 h-full w-full bg-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="text-[14px]">
                We help you establish a unique and recognizable identity through
                captivating logo design, purpose-driven brand strategy, and
                compelling messaging.
              </p>
              <p className="text-[16px] mt-5 text-[#0078FF] font-bold">
                View More
              </p>
            </div>
          </div>
        </div>
        <div className="group h-[252px] w-[372px] bg-[#F8F6F9] hover:bg-white hover:shadow-2xl hover:shadow-blue-200 rounded-3xl border border-slate-200 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl px-4 py-6 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:delay-[0.5s] ">
            <div className="absolute flex flex-col items-center justify-center inset-0">
              <img src={brandingIcon} alt="" />
              <h2 className="text-[24px] font-bold">Branding services</h2>
            </div>
            <div className="absolute flex flex-col items-center rounded-3xl justify-center inset-0 h-full w-full bg-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="text-[14px]">
                We help you establish a unique and recognizable identity through
                captivating logo design, purpose-driven brand strategy, and
                compelling messaging.
              </p>
              <p className="text-[16px] mt-5 text-[#0078FF] font-bold">
                View More
              </p>
            </div>
          </div>
        </div>
        <div className="group h-[252px] w-[372px] bg-[#F8F6F9] hover:bg-white hover:shadow-2xl hover:shadow-blue-200 rounded-3xl border border-slate-200 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl px-4 py-6 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:delay-[0.5s] ">
            <div className="absolute flex flex-col items-center justify-center inset-0">
              <img src={brandingIcon} alt="" />
              <h2 className="text-[24px] font-bold">Branding services</h2>
            </div>
            <div className="absolute flex flex-col items-center rounded-3xl justify-center inset-0 h-full w-full bg-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="text-[14px]">
                We help you establish a unique and recognizable identity through
                captivating logo design, purpose-driven brand strategy, and
                compelling messaging.
              </p>
              <p className="text-[16px] mt-5 text-[#0078FF] font-bold">
                View More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
