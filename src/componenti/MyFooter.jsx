
const MyFooter = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="link-container">
                    <div className="big">
                        <ul>
                            <li><h4>DC COMICS</h4></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                        <ul>
                            <li><h4>SHOP</h4></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <ul>
                        <ul>
                            <li><h4>DC</h4></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy (New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </ul>

                    <ul>
                        <li><h4>SITES</h4></li>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>

                </div>
                <img id="logo-grande" src="/img/dc-logo-bg.png" alt="dclogobg" />
            </div>


            <div className="social">
                <div className="container">
                    <button>SIGN UP NOW!</button>

                    <div className="social-link">
                        <ul>
                            <li><h4>FOLLOW US</h4></li>
                            <li><a href="#"><img src="/img/footer-facebook.png" alt="link-fb" /></a></li>
                            <li><a href="#"><img src="/img/footer-twitter.png" alt="link-tw" /></a></li>
                            <li><a href="#"><img src="/img/footer-youtube.png" alt="link-yt" /></a></li>
                            <li><a href="#"><img src="/img/footer-pinterest.png" alt="link-fb" /></a></li>
                            <li><a href="#"><img src="/img/footer-periscope.png" alt="link-ps" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default MyFooter;