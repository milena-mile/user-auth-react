import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ContextLogin {
    logged: boolean;
    setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInContext = createContext<ContextLogin>({
    logged: false,
    setLogged: () => {}
});

const useLogInContext = () => useContext(LogInContext);

const handleLogggedIn = () => {
    return !!localStorage.getItem('logged');
}

const LogInProvider = ({ children }: { children: ReactNode }) => {
    const [logged, setLogged] = useState(handleLogggedIn);
    
    return (
        <LogInContext.Provider value={{logged, setLogged}}>
            {children}
        </LogInContext.Provider>
    );
};

export { useLogInContext, LogInProvider };