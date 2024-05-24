import "./marvelSingleItem.scss";
import { NetworkSuccessState } from "../../../pages/types";

const MarvelSingleItem = (props: {data: NetworkSuccessState}) => {
    const marvel = props.data.response[0];

    return (
        <div className="b-marvel_single">
            <div className="b-marvel_single-img">
                <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={marvel.name} />
            </div>
            <h1 className="b-marvel_single-title">{marvel.name}</h1>
            <div className="b-marvel_single-desc">{marvel.description}</div>
            <div className="b-marvel_comics">
                {marvel.comics.items.length > 0 && (
                    <>
                        <h3 className="b-marvel_comics-title">Comics</h3>
                        <ul className="b-marvel_comics-list">
                            {marvel.comics.items.map((item, i) =>
                                <li className="b-marvel_comics-item" key={i}>
                                    <span>{item.name}</span>
                                </li>
                            )}
                        </ul>
                    </>
                )}               
            </div>
        </div>
    )
}

export default MarvelSingleItem;