import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Button from "../../elements/Button"
import { Link } from "react-router-dom";

const slides = [
    {
        image: "modern-livingroom.png",
        title: "Transform Your Space",
        text: "Redefine your living experience with modern, functional furniture built for comfort and style."
    },
    {
        image: "modern-bedroom.png",
        title: "Design That Inspires",
        text: "Enhance every corner of your home with beautifully crafted pieces that inspire and elevate."
    },
    {
        image: "modern-diningroom.png",
        title: "Sustainable Living Starts Here",
        text: "Choose furniture made with eco-friendly materials and sustainable practices good for your home and the planet."
    },
];

const HeroCarousel = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            autoplay={{ delay: 7000 }}
            pagination={{ clickable: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="relative md:w-full md:h-auto sm:h-auto lg:h-auto xl:h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative">
                        <img
                            src={`/carousel/${slide.image}`}
                            alt="image"
                            className="w-full object-cover md:w-full md:h-full"
                        />
                        <div className="w-full px-6 py-6 md:absolute md:top-[30%] md:left-20 md:max-w-xl md:py-0 md:px-0">
                            <h1 className="font-semibold text-2xl text-wood md:text-6xl  md:drop-shadow-xl">
                                {slide.title}
                            </h1>
                            <p className="text-base text-dark font-medium md:text-xl md:drop-shadow-lg">
                                {slide.text}
                            </p>
                            <Button className="mt-3 bg-wood h-9 px-4 text-light font-medium rounded-sm">
                                <Link to="/products">Explore Now</Link>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroCarousel;