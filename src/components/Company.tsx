"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/navigation";
import style from "@/styles/Company.module.css";

const Company = () => {
    const partners = [
        { name: "Kracken", logo: "/image/logo/Kracken.png" },
        { name: "Crypto Currency", logo: "/image/logo/CryptoCurrency.png" },
        { name: "BitSafe", logo: "/image/logo/BitSafe.png" },
        { name: "Cryptwire", logo: "/image/logo/Cryptwire.png" },
        { name: "Digital Crypto", logo: "/image/logo/DigitalCrypto.png" },
        { name: "Zcoin", logo: "/image/logo/Zcoin.png" },
    ];

    return (
        <div className={style.partnersContainer}>
            <h1>Company</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2}
                loop={true}
                navigation={{
                    prevEl: `.${style.prevButton}`,
                    nextEl: `.${style.nextButton}`,
                }}
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className={style.partnerLogo}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={style.navButtons}>
                <button className={style.prevButton}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={style.nextButton}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default Company;
