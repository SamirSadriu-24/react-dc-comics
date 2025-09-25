import { Container } from "postcss"
import digitalComicsImg from "/img/buy-comics-digital-comics.png";
import comicsMerchandise from "/img/buy-comics-merchandise.png";
import comicShopLocator from "/img/buy-comics-shop-locator.png";
import comicsSubs from "/img/buy-comics-subscriptions.png";
import powerVisa from "/img/buy-dc-power-visa.svg";
import MyJumbo from "./MyJumbo";
import MyBlueBanner from "./MyBlueBanner";
import ComicSection from "./ComicSection";

const MyMain = () => {
    return (
        <div className="main">

            <MyJumbo />
            <ComicSection />
            <MyBlueBanner />
            {/* container immagini e scritte bianche */}
            {/* <div className="card-container">
                <div className="card">
                    <figure>
                        <img src={digitalComicsImg} alt="dc-digital-comics-logo" />
                    <figcaption>DIGITAL COMICS</figcaption>
                    </figure>
                </div>

                <div className="card">
                    <figure>
                        <img src={comicsMerchandise} alt="dc-comics-merchandise" />
                    <figcaption>DC MERCHANDISE</figcaption>
                    </figure>
                </div>

                <div className="card">
                    <figure>
                        <img src={comicsSubs} alt="dc-subscription" />
                    <figcaption>SUBSCRIPTIONS</figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure>
                        <img src={comicShopLocator} alt="dc-comic-shop-locator" />
                    <figcaption>COMIC SHOP LOCATOR</figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure>
                        <img src={powerVisa} alt="dc-power-visa"/>
                    <figcaption>DC POWER VISA</figcaption>
                    </figure>
                </div>
            </div> */}
        </div>
    )

}

export default MyMain 