import "./input.scss";
import { ChangeEventHandler } from "react";

const Input = (props: {label?: string, type: string, value?: string, checked?: boolean, onChange?: ChangeEventHandler<HTMLInputElement>}) => {
    
    return (
        <label className={`b-input ${props.type}`}>
            <span className="b-input_label">{props.label}</span>
            <input type={props.type} value={props.value} className={`b-input_input ${props.type}`} onChange={props.onChange} checked={props.checked}/>
        </label>
    )
}

export default Input;