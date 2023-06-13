import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('')

    useEffect(() => {
        // console.log(theme);
        if (localStorage.getItem('theme') === "dark") {
            setTheme("dark")
        }
    }, [])

    useEffect(() => {
        // console.log(theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark")

        } else {
            document.documentElement.classList.remove("dark")
            // localStorage.setItem('theme', 'light')
        }
    }, [theme])

    console.log(theme);
    const handleThemeSwitch = () => {
        localStorage.setItem('theme', (theme === "light") ? 'dark' : 'light')
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <>
            <button onClick={handleThemeSwitch}
                className="btn p-0 text-3xl text-black dark:text-yellow-500 bg-transparent border-0 fixed z-50 bottom-5 left-5 hover:bg-transparent">
                {
                    theme === "dark" ? <BsFillSunFill /> : <FaMoon />
                }
            </button>
        </>
    );
};

export default ThemeSwitch;