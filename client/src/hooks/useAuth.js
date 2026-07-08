import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = ()=> {return useContext(AuthContext);}
/*  
    ?this:
        * makes user available everywhere
        * remembers login after refresh
        * keeps every component in sync
        * makes logout easy
    ! AuthContext is like a central place that stores the logged-in user's information, shares it with the entire app, and restores it after a page refresh by checking with the backend.
*/ 
export default useAuth;