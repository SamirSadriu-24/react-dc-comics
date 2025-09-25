import comics from "./comics"

const MyComicsExposition = () => {
    return (
        <div className="comic-list"> {/* wrapper unico */}
            {comics.map((comic, index) => (
                <div key={index} className="comic-card">
                    <img src={comic.thumb} alt={comic.title} />
                    <p>{comic.series.toUpperCase()}</p>
                </div>
            ))}
        </div>
    )
}

export default MyComicsExposition