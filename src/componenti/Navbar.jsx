const Links = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];

const Navbar = () => {
    return (
                <nav className="navbar">
                    <div className="linkbox">
                        <ul>
                            {Links.map((link, i) => (
                                <li key={i}>
                                    <a href={`/${link.toLowerCase()}`}>
                                        {link}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </nav>
    );
}



export default Navbar