import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyRequest } from "../API/authR";
import Cookie from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be within a AuthProvider");
    } 
    return context;
}

export const AuthProvider = ({ children }) => {
    // el usuario que va a ser leido en toda la aplicación
    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            console.error(error);
            setErrors(error.response.data);
            setUser(null);
            setIsAuthenticated(false);
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data);
            setUser(null);
            setIsAuthenticated(false);
        }
    }

    const logout = () =>{
        Cookie.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookie.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyRequest(cookies.token);
                console.log(res);
                if (!res.data) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user, 
            loading,
            isAuthenticated,
            errors

        }}>
            {children}
        </AuthContext.Provider>
    )
}

