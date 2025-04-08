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
        const activeEntry = links.find(link => currentPath.startsWith(link.to));
        if (!activeEntry) return;

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
        { to: '/static/case-studies', label: 'case studies' },
        { to: '/static/mini-projects', label: 'mini projects' },
        { to: '/art/artwork', label: 'artwork' },
    ];

    return (
        <div className="nav-bar px-6 py-4 relative">
            <div className="logo text-xl font-bold" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
                Xinai (Cathy) Wu
            </div>

            <div className="nav-links relative mt-2">
                <ul className="flex gap-6 relative" ref={containerRef}>
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                ref={(el) => (linkRefs.current[to] = el)}
                                className="relative text-base font-medium px-1 pb-1"
                            >
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
        </div>
    );
};

export default NavBar;
