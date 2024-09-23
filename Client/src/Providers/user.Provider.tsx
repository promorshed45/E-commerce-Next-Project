'use client'
import { getCurrentUser } from '@/services/auth';
import { IUser } from '@/types';
import { error } from 'console';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface IUserProviderValue {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;

}
const UserContext = createContext<IUserProviderValue | undefined>(undefined)


const UserProvider = ({children}:{children: ReactNode}) => {
    const [user,setUser] = useState<IUser | null>(null);
    const [isLoading,setIsLoading]= useState(true);

    const handleUser = async () => {
        const user = await getCurrentUser();

        setUser(user);
        setIsLoading(false);
    }

    useEffect(() => {
        handleUser();
    },[isLoading])

    return (
       <UserContext.Provider value={{user, setUser, isLoading, setIsLoading}}>
         {children}
       </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if(context === undefined){
        throw new Error("useUser must be use within the userProvider context    ")
    }
    return context;
}
export default UserProvider;