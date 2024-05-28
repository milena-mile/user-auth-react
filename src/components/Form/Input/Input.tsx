import "./input.scss";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({checked, label, onChange, required, type, value}) => {
    
    return (
        <label className={`b-input ${type}`}>
            <span className="b-input_label">{label}</span>
            <input 
                className={`b-input_input ${type}`}
                type={type} 
                value={value}  
                onChange={onChange} 
                checked={checked}
                required={required}/>
        </label>
    )
}

export default Input;