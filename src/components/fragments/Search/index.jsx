import Input from "../../elements/Input";
import Button from "../../elements/Button"
import { LuSearch } from "react-icons/lu";

const Search = ({ setSearchOpen }) => {
    const handleSearchClose = () => {
        setSearchOpen(false)
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-wood/40 z-60">
            <div className="w-[90%] bg-light py-5 px-[3%] rounded-md md:w-1/2 transform transition-all duration-300 ease-out scale-95 animate-fade-in-scale">
                <div className="flex justify-between w-full">
                    <form className="flex w-3/4">
                        <Input type="text" name="search" id="search"
                            placeholder="Search"
                            className="w-full h-9 px-4 font-poppins bg-gray-200 hover:bg-gray-300 focus:outline-none"
                        />
                        <Button className="flex justify-center items-center text-light text-lg -ms-7 w-8 bg-wood cursor-pointer" >
                            <LuSearch />
                        </Button>
                    </form>
                    <Button onClick={handleSearchClose} className="text-md font-medium cursor-pointer" >
                        Cancel
                    </Button>
                </div>
                <div className="mt-6">
                    <ul className="flex flex-col gap-2">
                        <li className="border-b border-gray-400/40 pb-2 text-dark cursor-pointer hover:text-wood duration-300">
                            Sofa modern minimalist
                        </li>
                        <li className="border-b border-gray-400/40 pb-2 text-dark cursor-pointer hover:text-wood duration-300">
                            Bed scandinavia style
                        </li>
                        <li className="border-b border-gray-400/40 pb-2 text-dark cursor-pointer hover:text-wood duration-300">
                            Chair
                        </li>
                        <li className="border-b border-gray-400/40 pb-2 text-dark cursor-pointer hover:text-wood duration-300">
                            Cabinets modern minimalist
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Search;