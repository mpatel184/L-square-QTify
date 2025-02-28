import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'
import styles from "./Carousel.module.css";

const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);

    return null;
};

export default function Carousel({data, renderComponent}){
    return(
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "Opx 20px" }}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove
            >
            <Controls data={data} />
            <div>
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
            </div>
            {data.map((ele)=>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}