import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { type = "text", name, id, placeholder, className, onChange = () => { } } = props
    return (
        <input ref={ref} type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} className={className} />
    );
})

export default Input;