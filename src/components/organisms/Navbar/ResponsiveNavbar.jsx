import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import { LuX, LuHeart, LuShoppingCart } from "react-icons/lu";

const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Shop",
        url: "/shop"
    },
    {
        name: "Services",
        url: "/services"
    },
]

const ResponsiveNavbar = ({ navOpen, setNavOpen }) => {
    const handleCloseNav = () => {
        setNavOpen(false)
    }

    return (
        <>
            <nav
                className={`fixed top-0 right-0 ${navOpen ? "transform translate-x-0 transition-transform duration-500" : "transform translate-x-full transition-transform duration-500"} w-80 h-screen bg-light z-70`}
            >
                <div className="flex justify-between items-center w-full px-6 py-[7%]">
                    <Link to="" className="text-dark text-2xl font-semibold">
                        Furni<span
                            className="text-wood">
                            Pay
                        </span>.
                    </Link>
                    <Button onClick={handleCloseNav} className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                        <LuX />
                    </Button>
                </div>
                <ul className="mt-7 px-[7%]">
                    {
                        navLinks.map(navLink => (
                            <li className="my-3" key={navLink.name}>
                                <Link to={navLink.url}
                                    className="text-xl after:content-[''] after:block after:pb-[2px] after:border-b-2 after:border-wood after:scale-x-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-[0.2]"
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="w-full mt-20 px-[7%]">
                    <p className="text-lg font-medium text-gray-500">
                        Join and find the right furniture for every corner of your home
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                        <Button
                            className="flex justify-center items-center border-2 border-wood text-dark font-semibold px-4 h-8 rounded-sm cursor-pointer hover:bg-wood hover:text-light duration-500">
                            <Link to="" className="text-sm">
                                Login
                            </Link>
                        </Button>
                        <Button
                            className="flex justify-center items-center border-2 border-wood text-dark font-semibold px-4 h-8 rounded-sm cursor-pointer hover:bg-wood hover:text-light duration-500">
                            <Link to="" className="text-sm">
                                Register
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full px-[7%] mt-10">
                    <Button className="flex justify-center items-center text-2xl w-9 h-9 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                        <Link to="">
                            <LuShoppingCart />
                        </Link>
                    </Button>
                    <Button className="flex justify-center items-center text-2xl w-9 h-9 cursor-pointer hover:bg-wood hover:rounded-full hover:text-light duration-500">
                        <Link to="">
                            <LuHeart />
                        </Link>
                    </Button>
                </div>
            </nav>
            {navOpen && (
                <div onClick={handleCloseNav}
                    className="absolute inset-0 bg-wood/40 z-60 block md:hidden"></div>
            )}
        </>
    );
}

export default ResponsiveNavbar;