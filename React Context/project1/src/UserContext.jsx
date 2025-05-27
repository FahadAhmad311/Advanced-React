import { Children } from "react";
import { useContext, useState, createContext } from "react";

const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "Fahad Ahmad",
        email: "fahadahmedaz3@gmail.com",
        dob: "04/ 12/ 2002"
    })
    return <UserContext.Provider value = {{ user }}>{children} </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)