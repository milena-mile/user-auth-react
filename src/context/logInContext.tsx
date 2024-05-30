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

const LogInProvider = ({ children }: { children: ReactNode }) => {
    const [logged, setLogged] = useState(!!localStorage.getItem('logged'));
    
    return (
        <LogInContext.Provider value={{logged, setLogged}}>
            {children}
        </LogInContext.Provider>
    );
};

export { useLogInContext, LogInProvider };