import { Container } from "postcss"
import digitalComicsImg from "./assets/img/buy-comics-digital-comics.png";

const MyBody = () => {
    return (
        <div className="box-content">

            <div className="container">
            <h2>{" --> Content goes here <-- "}</h2>
            </div>
            {/* container immagini e scritte bianche */}
            <div className="container">
                <div className="card">
                    <figure>
                        <img src={digitalComicsImg} alt="dc-digital-comics-logo" />
                    </figure>
                </div>
            </div>
        </div>
    )

}

export default MyBody 