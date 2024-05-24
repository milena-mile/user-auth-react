import "./error.scss";

const Error = () => {
    return (
        <div className="b-error">
            <div className="b-error_image-wrapper">
                <img src={`${import.meta.env.VITE_PUBLIC_URL}images/error.svg`} alt="error" className="b-error_image" />
            </div>
            <div className="b-error_text">Something get wrong. <br/> Try again later!</div>
        </div>
    )
}

export default Error;