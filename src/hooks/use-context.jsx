import { createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({children}) {
    const user = {
        username: "Luckson",
        email:"luckson@gmail.com",
        age:20
    }
    return (
        <UserContext.Provider value={{user}}>
            { children }
        </UserContext.Provider>
    )
}