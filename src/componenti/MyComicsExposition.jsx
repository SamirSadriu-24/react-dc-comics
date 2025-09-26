import ComicCard from "./ComicCard"
import comics from "./comics"

const MyComicsExposition = () => {
    return (
        <div className="comic-list">
            {comics.map((comic) => (
                <ComicCard
                key={comic.id}
                comicProp = {comic}
                
                />
            ))}
        </div>
    )
}

export default MyComicsExposition