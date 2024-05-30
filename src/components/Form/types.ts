interface ILogIn {
    emailLogIn: string,
    passwordLogIn: string,
    setEmailLogIn: React.Dispatch<React.SetStateAction<string>>,
    setPasswordLogIn: React.Dispatch<React.SetStateAction<string>>
}

interface ISignUp {
    emailSignUp: string,
    passwordSignUp: string,
    setEmailSignUp: React.Dispatch<React.SetStateAction<string>>,
    setPasswordSignUp: React.Dispatch<React.SetStateAction<string>>
}

export type { ILogIn, ISignUp }