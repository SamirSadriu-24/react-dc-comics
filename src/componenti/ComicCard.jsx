const ComicCard = (props) => {

    const {thumb, title, series} = props.comicProp;

    return(
        <div className="comic-card">
            <img src={thumb} alt = {title} />
            <p>{series.toUpperCase()}</p>
        </div>
    )
}

export default ComicCard