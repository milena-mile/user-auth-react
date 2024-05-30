import { ChangeEventHandler } from "react";

interface IInput {
    label?: string, 
    type: string, 
    name: string,
    value?: string, 
    autoComplete?: string,
    checked?: boolean, 
    onChange?: ChangeEventHandler<HTMLInputElement>, 
    required?: boolean
}

export type { IInput };