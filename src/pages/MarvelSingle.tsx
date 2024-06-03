import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { NetworkState, NetworkSuccessState } from './types';
import requestAPI from "../services/request";
import MarvelSingleItem from "../components/Marvel/MarvelSingleItem/MarvelSingleItem";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import NotFound from "../components/NotFound/NotFound";

const APIkey = import.meta.env.VITE_SINGLE_API_KEY;
const APIurl = import.meta.env.VITE_MARVEL_API_URL;

const SingleBook = () => {
    const id = useParams();

    const [marvel, setMarvel] = useState<NetworkState>({state: "loading"});

    useEffect(() => {
        async function getData() {
            requestAPI(`${APIurl}/v1/public/characters/${id.characterId}?apikey=${APIkey}`)
                .then(data => {
                    const successData = data as NetworkSuccessState;
                    setMarvel(successData);
                })
        }
        getData();
    }, []);

    return (
        <>
            {marvel.state === "loading" && <Loading/>}
            {(marvel.state === "failed" && marvel.response === "not found") && <NotFound />}
            {(marvel.state === "failed" && marvel.response !== "not found") && <Error/>}
            {marvel.state === "success" && <MarvelSingleItem data={marvel}/>}
        </>
    )
}

export default SingleBook;