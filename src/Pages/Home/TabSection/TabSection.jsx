import { useState } from "react";
import video1 from "../../../assets/osumareVideo1.mp4";
import awardImg from "../../../assets/awd 1.png";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Awards",
      content: (
        <div>
          <img
            className="rounded-3xl   w-full h-[610px]"
            src={awardImg}
            alt=""
          />
        </div>
      ),
    },
    {
      label: "Process",
      content: (
        <div>
          <video
            className="rounded-3xl w-full h-[610px]"
            controls
            src={video1}
          />
        </div>
      ),
    },
    {
      label: "Work",
      content: (
        <div>
          <img
            className="rounded-3xl  w-full h-[610px]"
            src={awardImg}
            alt=""
          />
        </div>
      ),
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="flex items-center px-[80px] my-40">
      <div className="  p-4">
        <h2 className="text-[32px] font-bold">
          Know Why Business <br /> Trust Osumare
        </h2>
        <ul className="flex my-10 flex-col gap-5">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer btn w-[200px] rounded-3xl py-3 ${
                activeTab === index
                  ? "bg-blue-500 w-[250px] text-white"
                  : "hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 rounded-3xl p-4">
        <div className="bg-white rounded-3xl p-4">
          <div className="rounded-3xl">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
