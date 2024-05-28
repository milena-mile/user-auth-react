import { ChangeEventHandler } from "react";

interface IInput {
    label?: string, 
    type: string, 
    value?: string, 
    checked?: boolean, 
    onChange?: ChangeEventHandler<HTMLInputElement>, 
    required?: boolean
}

export type { IInput };