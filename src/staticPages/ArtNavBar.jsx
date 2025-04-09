import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ArtNavBar = () => {
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
        { to: '/static/artwork/3d-modeling', label: '3d modeling' },
        { to: '/static/artwork/animation', label: 'animation' },
        { to: '/static/artwork/paintings', label: 'paintings' },
        { to: '/static/artwork/drawings', label: 'drawings' },
    ];

    return (
            <div className="secondary-nav-links">
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
    );
};

export default ArtNavBar;
