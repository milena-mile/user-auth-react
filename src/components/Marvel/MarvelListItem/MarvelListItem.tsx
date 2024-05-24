import "./marvelListItem.scss";
import { Link } from "react-router-dom";
import { MarvelInfo } from "../types";

const PokemonsListItem = (props: {data: MarvelInfo}) => {
    const marvel = props.data;
    const id = props.data.id;

    return (
        <Link to={`/list/${id}`} className="b-marvel_item">
           <div className="b-marvel_item-image">
                <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={marvel.name} />
           </div>
           <div className="b-marvel_item-title">{marvel.name}</div>
        </Link>
    )
}

export default PokemonsListItem;