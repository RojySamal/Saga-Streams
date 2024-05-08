import { useAuthContext } from "./useAuthContext";

export const useLogout = () =>{
    const {logout} = useAuthContext();

    const logmeout = () =>{
        localStorage.removeItem('user');
        logout();
    }

    return {logmeout}
    
}