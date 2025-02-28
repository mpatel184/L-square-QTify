import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
  useEffect(() => {
    const updateIsEnd = () => {
      setIsEnd(swiper.isEnd);
    };
    
    updateIsEnd();
    
    swiper.on("slideChange", updateIsEnd);
    
    return () => {
      swiper.off("slideChange", updateIsEnd);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}