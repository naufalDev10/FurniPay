import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Search from "../fragments/Search";
import Button from "../elements/Button";
import { LuMenu, LuSearch, LuShoppingCart, LuUserRound, LuHeart } from "react-icons/lu";

const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Products",
        url: "/"
    },
    {
        name: "Services",
        url: "/"
    },
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavOpen = () => {
        setNavOpen(true)
    }

    const handleSearchOpen = () => {
        setSearchOpen(true)
    }
    return (
        <>
            <header className={`flex justify-center items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <nav className="flex justify-between items-center w-full max-w-[1440px] py-4 px-[3%] md:px-[7%]">
                    <Link to="" className="text-dark text-xl font-semibold">
                        Furni<span
                            className="text-wood">
                            Pay
                        </span>.
                    </Link>
                    <ul className="hidden md:flex md:justify-center md:items-center md:gap-8">
                        {
                            navLinks.map(navLink => (
                                <li key={navLink.name}>
                                    <Link to={navLink.url} className="after:content-[''] after:block after:pb-[2px] after:border-b-2 after:border-wood after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-50">
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex justify-center items-center gap-1 md:gap-2">
                        <Button onClick={handleSearchOpen} className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                            <LuSearch />
                        </Button>
                        <Button className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                            <LuShoppingCart />
                        </Button>
                        <Button className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                            <Link to="">
                                <LuUserRound />
                            </Link>
                        </Button>
                        <Button className="hidden md:flex md:justify-center md:items-center md:text-xl md:w-9 md:h-9 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                            <Link to="">
                                <LuHeart />
                            </Link>
                        </Button>
                        <Button onClick={handleNavOpen} className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer md:hidden hover:bg-wood hover:rounded-full hover:text-light duration-300">
                            <LuMenu />
                        </Button>
                    </div>
                </nav>
            </header>
            <ResponsiveNavbar navOpen={navOpen} setNavOpen={setNavOpen} />
            {
                searchOpen && (
                    <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
                )
            }
        </>
    );
}

export default Navbar;