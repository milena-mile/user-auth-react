interface AuthOnload {
    setEmail: React.Dispatch<React.SetStateAction<string>>, 
    setPassword: React.Dispatch<React.SetStateAction<string>>, 
    setRememberMe: React.Dispatch<React.SetStateAction<boolean>>
}

export type {AuthOnload};