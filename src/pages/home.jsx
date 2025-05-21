import Navbar from "../components/layouts/Navbar";
import HeroCarousel from "../components/fragments/HeroCarousel";

const Home = () => {

    return (
        <>
            <Navbar />
            <HeroCarousel />
            <div className="flex justify-between pt-10 px-[7%] md:gap-4">
                <div className="w-1/3">
                    <h3 className="text-xl font-bold md:text-3xl">200+</h3>
                    <p className="text-xs font-medium md:text-base">Furniture and Home Equipments</p>
                </div>
                <div className="w-1/3">
                    <h3 className="text-xl font-bold md:text-3xl">300+</h3>
                    <p className="text-xs font-medium md:text-base">Fresh Interior Design Theme</p>
                </div>
                <div className="w-1/3">
                    <h3 className="text-xl font-bold md:text-3xl">570+</h3>
                    <p className="text-xs font-medium md:text-base">Happy Costumers of this</p>
                </div>
            </div>
        </>
    );
}

export default Home;