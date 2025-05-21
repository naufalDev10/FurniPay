import Button from "../../atoms/Button";
import { LuShoppingCart } from "react-icons/lu";

const Card = (props) => {
    const { children, className } = props
    return (
        <div className={`flex flex-col items-center shadow shadow-dark/30 p-3 ${className}`}>
            {children}
        </div>
    );
}

const Header = (props) => {
    const { image } = props
    return (
        <div className="">
            <img src={`/products/${image}`} alt="" className="" />
        </div>
    )
}

const Body = (props) => {
    const { name, description } = props
    return (
        <div className="w-full">
            <h1 className="font-semibold text-lg text-wood">
                {name}
            </h1>
            <p className="">{description}</p>
        </div>
    )
}

const Footer = (props) => {
    const { price } = props
    return (
        <div className="flex justify-between items-center w-full">
            <p className="font-semibold">
                <span className="text-wood">Rp. </span>{price}
            </p>
            <Button
                className="flex justify-center items-center text-xl w-8 h-8 cursor-pointer 
                hover:bg-wood hover:rounded-full hover:text-light duration-500"
            >
                <LuShoppingCart />
            </Button>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card;