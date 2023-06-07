import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Header = () => {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div>
            <h1>Hi Header</h1>
            <div className="m-5">
                🌞
                <div className="inline-block w-10">
                    <span data-toggle-theme="dark,light" data-act-class="pl-4" className="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
                        <span className="rounded-full w-3 h-3 m-1 bg-green-700">
                        </span>
                    </span>
                </div>
                🌚
            </div>
        </div>
    );
};

export default Header;