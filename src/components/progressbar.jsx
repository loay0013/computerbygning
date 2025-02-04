import React, { useEffect, useState } from "react";
import '../styles/homepage.css';

const ScrollProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Distance scrolled from the top
            const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const percent = (scrollTop / docHeight) * 100; // Percentage scrolled
            setScrollPercent(percent); // Update state
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
            progressBar.style.height = `${scrollPercent}%`;
        }
    }, [scrollPercent]); // Update DOM whenever scrollPercent changes

    return null; // Nothing is rendered
};

export default ScrollProgressBar;
