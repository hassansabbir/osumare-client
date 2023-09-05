import image1 from "../../../assets/clientLogo/BENEFIT.png";
import image2 from "../../../assets/clientLogo/Best_Facebook_Marketing_Company_Mumbai 1 (1).png";
import image3 from "../../../assets/clientLogo/Best_Facebook_Marketing_Company_Mumbai 1.png";
import image4 from "../../../assets/clientLogo/Best_Political_Branding_Company_Pune 1.png";
import image5 from "../../../assets/clientLogo/daikin_client 1.png";
import image6 from "../../../assets/clientLogo/ELFA.png";
import image7 from "../../../assets/clientLogo/Facebook_Account_Management_Company_in_India 1.png";
import image8 from "../../../assets/clientLogo/Facebook_Account_Management_Company_in_Mumbai 1.png";
import image9 from "../../../assets/clientLogo/Facebook_Account_Management_Company_Pune 1.png";
import image10 from "../../../assets/clientLogo/firstflight 1.png";
import image11 from "../../../assets/clientLogo/govind-developers 1.png";
import image12 from "../../../assets/clientLogo/hp 1.png";
import image13 from "../../../assets/clientLogo/hpe.png";
import image14 from "../../../assets/clientLogo/huawei_client 1.png";
import image15 from "../../../assets/clientLogo/ifbi 1.png";
import image16 from "../../../assets/clientLogo/kul_kumar_client 1.png";
import image17 from "../../../assets/clientLogo/lotus.png";
import image18 from "../../../assets/clientLogo/microsoft 1.png";
import image19 from "../../../assets/clientLogo/msm_client 1.png";
import image20 from "../../../assets/clientLogo/nutanix 1.png";
import image21 from "../../../assets/clientLogo/pnb_client 1.png";
import image22 from "../../../assets/clientLogo/Political_Branding_Company_Mumbai 1.png";
import image23 from "../../../assets/clientLogo/rathi_group_client 1.png";
import image24 from "../../../assets/clientLogo/redington 1.png";
import image25 from "../../../assets/clientLogo/rs.png";
import image26 from "../../../assets/clientLogo/sairung-devolopers 1.png";
import image27 from "../../../assets/clientLogo/shree-translink 1.png";
import image28 from "../../../assets/clientLogo/voslki.png";
import image29 from "../../../assets/clientLogo/WE DEVELOPER.png";
import image30 from "../../../assets/clientLogo/WIGHT CASTEL.png";
import reviewImg from "../../../assets/review.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

const ClientSection = () => {
  const clientsLogo = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
  ];
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      review: "Excellent product, I'm very satisfied with my purchase.",
    },
    {
      name: "Alice Smith",
      rating: 4,
      review: "Good quality and fast delivery.",
    },
    {
      name: "Bob Johnson",
      rating: 3,
      review: "Average product, could be better.",
    },
    {
      name: "Eve Davis",
      rating: 5,
      review: "Outstanding service and support!",
    },
  ];

  return (
    <div className="mb-20 flex bg-gray-100 items-center h-[600px]">
      <div className="text-center hover:w-full hover:z-1 w-1/2">
        <h2 className="text-[32px] font-bold">Our Clients</h2>
        <p className="text-[18px] mx-auto mb-10 w-7/12">
          Pune, Mumbai, Delhi and Nashik.With 450+ happy clients around the
          world.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-10">
          {clientsLogo.map((client, i) => (
            <img key={i} src={client} alt={`Image ${i + 1}`} />
          ))}
        </div>
      </div>
      <div className="bg-[#01336b] text-white text-center w-1/2">
        <h2 className="text-[32px]">testimonials</h2>
        <p className="text-[18px]">Hear About Us From Our Clients</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-[#01336b] text-white "
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex bg-[#01336b] text-white  py-20">
                <div>
                  <img
                    className="rounded-full w-[20px]"
                    width={20}
                    height={20}
                    src={reviewImg}
                    alt=""
                  />
                </div>
                <h2>{review.name}</h2>
                <div></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSection;
