import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const navigateTo = useNavigate();
    const location = useLocation();

    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
    const linkRefs = useRef({});
    const containerRef = useRef(null);

useEffect(() => {
    const currentPath = location.pathname;

    // Try exact match first
    let activeEntry = links.find(link => link.to === currentPath);

    // Then fall back to startsWith (if needed)
    if (!activeEntry) {
        activeEntry = links.find(link => currentPath.startsWith(link.to));
    }

    if (!activeEntry) {
        setUnderlineProps({ left: 0, width: 0 }); // Clear underline if no match
        return;
    }

    const activeRef = linkRefs.current[activeEntry.to];
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (activeRef && containerRect) {
        const rect = activeRef.getBoundingClientRect();
        setUnderlineProps({
            left: rect.left - containerRect.left,
            width: rect.width,
        });
    }
}, [location]);

    const links = [
        { to: '/', label: 'home' },
        { to: '/about', label: 'about' },
    ];

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    Made with {'<3'}
                </div>
                <div className="footer-section">
                    <ul>
                        <li>Resume</li>
                        <li>LinkedIn</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Footer;
