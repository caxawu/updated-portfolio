import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
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
        <div className="nav-bar" id="home-nav-bar">
            <div className="nav-bar-content">
                <div className="logo" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
                    Xinai (Cathy) Wu
                </div>
                <div className="links-and-button">
                    <div className="nav-links">
                        <ul ref={containerRef}>
                            {links.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink to={to} ref={(el) => (linkRefs.current[to] = el)}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <motion.div
                            className="sliding-underline"
                            animate={{ left: underlineProps.left, width: underlineProps.width }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    </div>
                    <div className="nav-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                        go to static portfolio
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
