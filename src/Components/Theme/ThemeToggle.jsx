// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const themes = ["light", "dark"];
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className="flex gap-2 items-center">
            <label className="font-bold">Theme:</label>
            <select
                className="select select-bordered select-sm"
                value={theme}
                onChange={handleChange}
            >
                {themes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
        </div>
    );
};

export default ThemeToggle;