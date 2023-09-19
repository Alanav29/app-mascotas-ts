// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/home/PublicityBanner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type item = {
	img: string;
};

interface Props {
	items: Array<item>;
}

const PublicityBanner: React.FC<Props> = ({ items }) => {
	return (
		<>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={items[0].img} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={items[1].img} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={items[2].img} />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default PublicityBanner;
