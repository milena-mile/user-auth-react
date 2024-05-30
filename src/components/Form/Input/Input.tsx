import "./input.scss";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({checked, label, onChange, autoComplete, required, type, value}) => {
    
    return (
        <label className={`b-input ${type}`}>
            <span className="b-input_label">{label}</span>
            <input 
                className={`b-input_input ${type}`}
                type={type} 
                value={value}  
                autoComplete={autoComplete}
                onChange={onChange} 
                checked={checked}
                required={required}/>
        </label>
    )
}

export default Input;