import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { NetworkState, NetworkSuccessState } from './types';
import requestAPI from "../services/request";
import MarvelSingleItem from "../components/Marvel/MarvelSingleItem/MarvelSingleItem";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

const APIkey = "apikey=fc65849a30741fefecd10fe2a23f336a";

const SingleBook = () => {
    const id = useParams();

    const [marvel, setMarvel] = useState<NetworkState>({state: "loading"});

    useEffect(() => {
        async function getData() {
            requestAPI(`https://gateway.marvel.com:443/v1/public/characters/${id.characterId}?${APIkey}`)
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
            {marvel.state === "failed" && <Error/>}
            {marvel.state === "success" && <MarvelSingleItem data={marvel}/>}
        </>
    )
}

export default SingleBook;