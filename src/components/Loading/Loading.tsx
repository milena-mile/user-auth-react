import "./loading.scss";

const Loading = () => {
    return (
        <div className="b-loading">
            <img src={`${import.meta.env.VITE_PUBLIC_URL}images/loading.svg`} alt="loading..." className="b-loading_image"/>
        </div>
    )
}

export default Loading;