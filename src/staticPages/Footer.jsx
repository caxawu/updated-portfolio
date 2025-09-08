import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { trackEvent } from './Analytics';

const Footer = () => {
    const location = useLocation();

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
                    Made with &#128149;
                </div>
                <div className="footer-section">
                    <ul>
                        <li>
                            <a href="Cathy Wu Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                id="resume"
                                onClick={() => trackEvent('Footer Links', 'Resume Click', 'Footer')}
                            >Resume</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/xinai-cathy-wu"
                                target="_blank"
                                rel="noreferrer"
                                id="linkedin"
                                onClick={() => trackEvent('Footer Links', 'LinkedIn Click', 'Footer')}
                            >Linkedin</a>
                        </li>
                        <li>
                            <a href="mailto:xinai.cathy.wu@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                id="mail"
                                onClick={() => trackEvent('Footer Links', 'Mail Click', 'Footer')}
                            >Email</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Footer;
