import "./pages.scss";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import requestAPI from "../services/request";
import { NetworkState, NetworkSuccessState } from "./types";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import MarvelListItem from "../components/Marvel/MarvelListItem/MarvelListItem";
import LogOut from "../components/LogOut/LogOut";

const APIkey = import.meta.env.VITE_LIST_API_KEY;
const APIurl = import.meta.env.VITE_MARVEL_API_URL;

const MarvelList = () => {
    const [marvel, setMarvel] = useState<NetworkState>({state: "loading"});

    const location = useLocation();
    const navigate = useNavigate();

    const getPageFromHash = () => {
        const hash = location.hash.slice(1);
        return hash ? +hash : 1;
    };

    const [page, setPage] = useState(getPageFromHash());
    const [offset, setOffset] = useState((page - 1) * 20);

    useEffect(() => {
        setMarvel(prevState => ({
            ...prevState,
            state: "loading"
        }))

        if (page !== getPageFromHash()) {
            navigate(`${location.pathname}#${page}`, { replace: true });
        }

        async function getData() {
            requestAPI(`${APIurl}/v1/public/characters?limit=20&offset=${offset}&apikey=${APIkey}`)
                .then(data => {
                    const successData = data as NetworkSuccessState;
                    setMarvel(successData);
                })
        }
        getData();
    }, [page]);

    useEffect(() => {
        const newPage = getPageFromHash();
        setPage(newPage);
        setOffset((newPage - 1) * 20);
    }, [location.hash]);

    const handlePage = (page: number) => {
        setPage(page);
        setOffset((page - 1) * 20);
        navigate(`${location.pathname}#${page}`);
    }

    const buttonClass = (index: number, page: number) => {
        if (index + 1 === page) return "current";
        if (index + 1 === page + 1 || index + 1 === page - 1) return "side";
        if (index === 0) return "first";
        if (index === 19) return "last";
        return 'hide';
    }

    return (
        <div className="b-marvel">
            <LogOut />
            <h1 className="b-marvel_title">List of characters</h1>
            <hr/>
            {marvel.state === "loading" && <Loading/>}
            {marvel.state === "failed" && <Error/>}
            {marvel.state === "success" && 
                <>
                    <div className="b-marvel_list">
                        {Object.entries(marvel.response).map((_, i) => {
                            return (
                                <MarvelListItem data={marvel.response[i]} key={i}/>
                            )
                        })}
                    </div>
                    <div className="b-marvel_pages">
                        {[...Array(20).keys()].map((index) => {
                            if (buttonClass(index, page) !== "hide")
                                return (
                                    <>
                                        {buttonClass(index, page) === "last" && <span className="b-marvel_pages-separator">...</span>}
                                        <button
                                            className={`b-marvel_page b-button ${buttonClass(index, page)}`} 
                                            onClick={() => handlePage(index + 1)} key={index}>
                                                {index + 1}
                                        </button>
                                        {buttonClass(index, page) === "first" && <span className="b-marvel_pages-separator">...</span>}
                                    </>
                                )
                        })}
                    </div>  
                </>
            }
        </div>
    )
 }

export default MarvelList;