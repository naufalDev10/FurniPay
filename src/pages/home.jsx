import { useRef } from "react";
import Navbar from "../components/layouts/Navbar"
import Hero from "../components/fragments/Hero"
import Card from "../components/fragments/Card/Card";
import Button from "../components/elements/Button";

import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

const products = [
    {
        id: 1,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
    {
        id: 2,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
    {
        id: 3,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
    {
        id: 4,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
    {
        id: 5,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
    {
        id: 6,
        name: "FurniPay Aura Duo",
        description: "Lorem ipsum dolor sit amet.",
        price: 2500000,
        image: "FurniPay_Aura_Duo_Bagie.png"
    },
]

const Home = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const container = scrollRef.current
        const scrollAmount = 343

        if (direction === "left") {
            container.scrollLeft -= scrollAmount
        } else {
            container.scrollLeft += scrollAmount
        }
    }

    return (
        <>
            <Navbar />
            <Hero />
            <div className="flex justify-center items-center w-full bg-wood py-5 px-[7%]">
                <div className="flex justify-between items-center gap-3 w-full max-w-[1440px] md:gap-0">
                    <div className="">
                        <h1 className="text-light font-semibold text-2xl">250+</h1>
                        <p className="text-light text-sm md:text-base">Products Furniture and Interior</p>
                    </div>
                    <div className="">
                        <h1 className="text-light font-semibold text-2xl">500+</h1>
                        <p className="text-light text-sm md:text-base">Furniture Products Sold</p>
                    </div>
                    <div className="">
                        <h1 className="text-light font-semibold text-2xl">250+</h1>
                        <p className="text-light text-sm md:text-base">Products Furniture and Interior</p>
                    </div>
                </div>
            </div>

            <section className="flex justify-center items-center w-full pt-20">
                <div className="flex flex-col justify-center items-center w-full max-w-[1440px] px-[7%]">
                    <div className="flex justify-between w-full">
                        <h1 className="text-3xl font-semibold">Products <span className="text-wood">Featured</span></h1>
                        <div className="flex justify-center gap-2">
                            <Button onClick={() => scroll("right")} className="flex justify-center items-center text-3xl w-9 h-9 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                                <LuArrowRight />
                            </Button>
                            <Button onClick={() => scroll("left")} className="flex justify-center items-center text-3xl w-9 h-9 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                                <LuArrowLeft />
                            </Button>
                        </div>
                    </div>
                    <div ref={scrollRef}
                        className="flex items-center gap-5 overflow-x-auto hide-scrollbar scroll-smooth w-full mt-8"
                    >
                        {
                            products.map(product => (
                                <Card key={product.id} className="gap-3 min-w-full md:min-w-[260px]">
                                    <Card.Header image={product.image} />
                                    <Card.Body name={product.name} description={product.description} />
                                    <Card.Footer price={product.price} />
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;