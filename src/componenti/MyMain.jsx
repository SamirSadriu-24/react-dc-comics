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
            
        </div>
    )

}

export default MyMain 