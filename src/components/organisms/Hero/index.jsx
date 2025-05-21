import { Link } from "react-router-dom";
import Button from "../../atoms/Button";

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-[url('/carousel/modern-livingroom.png')] 
            bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute top-2/6 w-full text-center px-4 md:left-[7%] 
                md:w-[55%] md:text-start"
            >
                <h1 className="font-semibold text-3xl md:text-6xl">
                    Elegant and Comfortable <span className="text-wood">Living Spaces</span>
                </h1>
                <p className="font-medium my-3 md:my-4 md:text-lg">
                    Stunning interior design, quality furniture, and competitive prices. We help you create your dream home.
                </p>
                <Button
                    className="bg-wood px-4 h-9 text-light font-medium rounded-sm 
                    cursor-pointer"
                >
                    <Link to="">Shop Now</Link>
                </Button>
            </div>
        </section>
    );
}

export default Hero;