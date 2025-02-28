import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const updateIsEnd = () => {
      setIsEnd(swiper.isEnd);
    };

    updateIsEnd();

    swiper.on("slideChange", updateIsEnd);
    swiper.on("reachEnd", updateIsEnd);
    swiper.on("reachBeginning", updateIsEnd);

    return () => {
      swiper.off("slideChange", updateIsEnd);
      swiper.off("reachEnd", updateIsEnd);
      swiper.off("reachBeginning", updateIsEnd);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
