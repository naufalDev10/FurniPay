import Navbar from "../organisms/Navbar/Navbar"
import Hero from "../organisms/Hero"
import Stats from "../molekuls/Stats"
import ProductsFeatured from "../organisms/ProductsFeatured"

const HomeTemplate = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <ProductsFeatured />
        </>
    );
}

export default HomeTemplate;