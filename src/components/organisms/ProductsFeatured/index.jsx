import { useRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Button from "../../atoms/Button";
import Card from "../../molekuls/Card/Card";

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
]

const ProductsFeatured = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const container = scrollRef.current
        const scrollAmount = 342
        direction == "left" ? container.scrollLeft -= scrollAmount : container.scrollLeft += scrollAmount
    }

    return (
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
    );
}

export default ProductsFeatured;