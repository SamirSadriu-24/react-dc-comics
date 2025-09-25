import MyComicsExposition from "./MyComicsExposition"



const ComicSection = () => {
    return (
        <div className="comic-section">
                <div className="container current">
                    <button id="etichetta">CURRENT SERIES</button>
                </div>
            <div className="container-comics">
                <MyComicsExposition />
            </div>
            <div className="container-button">
                <button className="load">LOAD MORE</button>
            </div>
        </div>
    )
}

export default ComicSection