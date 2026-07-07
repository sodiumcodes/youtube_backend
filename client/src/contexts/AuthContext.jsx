import { createContext, useEffect } from "react";
import { getCurrentUser } from "../features/auth/api/authAPI";

export const AuthContext = createContext();

const AuthProvider=({children})=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        async function loadUser() {
            try {
                const data = await getCurrentUser();
                setUser(data.user);
            } catch (error) {
                setUser(null);
            }
            finally{
                setLoading(false);
            }
            loadUser();
        }
    }, [])
    return (
        // ! Since the context value changes, every component using user automatically re-renders.
        <AuthContext.Provider value={
            user, setUser, loading
        }>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;