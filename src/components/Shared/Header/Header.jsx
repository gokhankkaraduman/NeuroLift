import PillNav from './PillNav/PillNav';
import logo from '../../../assets/logo.png';
import styles from './Header.module.css';

export default function Header() {

    const isLoggedIn = true;

    const loggedInRoutes =[
                { label: 'Home', href: '/home' },
                { label: 'Journal', href: '/journal' },
                { label: 'History', href: '/history' },
                { label: 'Ai Insights', href: '/ai-insights' },
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Meditation', href: '/meditation' },
                { label: 'Profile', href: '/profile' },
                { label: 'About Dev', href: '/about' }

    ]

    const loggedOutRoutes = [
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
                { label: 'About Dev', href: '/about' },
                { label: 'Login', href: '/login' },
                { label: 'Sign Up', href: '/signup' }
    ]

  return (
    <div className={styles.headerContainer}>
        <PillNav 
            logo={logo}
            logoAlt="Company Logo"
            items={isLoggedIn ? loggedInRoutes : loggedOutRoutes}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#ffffff"
            pillColor="#000000"
            hoveredPillTextColor="#000000"
            pillTextColor="#ffffff"
        />
    </div>
  )
}
