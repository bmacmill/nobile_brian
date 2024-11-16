import React, { useContext, createContext, useState } from "react"


const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeProvider value={{ theme, toggleTheme }}>
            {children}
        </ThemeProvider>
    )
}

export const useTheme = () => useContext(ThemeContext)