
import { useState, useEffect } from "react";
import { FaHome, FaFileAlt } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import styles from "./FloatingDock.module.css";

const FloatingDock = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className={styles.dockContainer}>
            <div className={styles.dock}>
                {/* Home */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={styles.dockItem}
                >
                    <FaHome />
                    <span className={styles.tooltip}>Home</span>
                </Link>

                {/* Resume */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dockItem}
                >
                    <FaFileAlt />
                    <span className={styles.tooltip}>Resume</span>
                </a>

                <div className={styles.separator}></div>

                {/* LeetCode */}
                <a
                    href="https://leetcode.com/alfez18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dockItem}
                >
                    <SiLeetcode style={{ color: "#FFA116" }} />
                    <span className={styles.tooltip}>LeetCode</span>
                </a>

                {/* Codeforces */}
                <a
                    href="https://codeforces.com/profile/alfez2503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dockItem}
                >
                    {/* Using icon for dock to keep it clean, but could use SVG if preferred. Using Icon for consistency in small size */}
                    <SiCodeforces style={{ color: "#1F8ACB" }} />
                    <span className={styles.tooltip}>Codeforces</span>
                </a>

                {/* CodeChef */}
                <a
                    href="https://www.codechef.com/users/alfez18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dockItem}
                >
                    <SiCodechef style={{ color: "#5B4638" }} />
                    <span className={styles.tooltip}>CodeChef</span>
                </a>

                <div className={styles.separator}></div>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className={styles.dockItem}>
                    {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
                    <span className={styles.tooltip}>Theme</span>
                </button>
            </div>
        </div>
    );
};

export default FloatingDock;
