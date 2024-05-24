import "./pages.scss";
import Form from "../components/Form/Form";

const FormPage = (props: {form: string}) => {
    return (
        <div className="p-wrapper_form">
            <Form form={props.form}/>
        </div>
    )
}

export default FormPage;