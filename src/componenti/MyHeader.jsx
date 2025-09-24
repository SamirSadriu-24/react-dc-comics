import logo from "../assets/img/dc-logo.png";

const MyHeader = () => {
    return (
        <header>
            <div className="container">
                <figure>
                    <img src={logo} alt="logo-dc" />
                </figure>
                <nav className="navbar">
                    <div className="linkbox">
                        <ul>
                            <li>
                                <a href="#">CHARACTERS</a>
                            </li>
                            <li>
                                <a href="#">COMICS</a>
                            </li>
                            <li>
                                <a href="#">MOVIES</a>
                            </li>
                            <li>
                                <a href="#">TV</a>
                            </li>
                            <li>
                                <a href="#">GAMES</a>
                            </li>
                            <li>
                                <a href="#">COLLECTIBLES</a>
                            </li>
                            <li>
                                <a href="#">VIDEOS</a>
                            </li>
                            <li>
                                <a href="#">FANS</a>
                            </li>
                            <li>
                                <a href="#">NEWS</a>
                            </li>
                            <li>
                                <a href="#">SHOP</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default MyHeader