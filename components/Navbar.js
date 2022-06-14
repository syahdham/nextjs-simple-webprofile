import Link from "next/link";
import { withRouter} from "next/router";

function Navbar({ router }) {

    const menus = [
        { 'text': 'Home', href: '/' },
        { 'text': 'About', href: '/about' },
        { 'text': 'Project', href: '/project' },
        { 'text': 'Contact', href: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <a className="logo">
                        Nama.
                    </a>
                </Link>
                <ul className="nav-links">
                    {menus.map(function (menu) {
                        return <li key={menu.href}>
                            <Link href={menu.href}>
                                <a className={`nav-item ${router.pathname === menu.href ? 'active' : ''}`}
                                >{menu.text}
                                </a>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)