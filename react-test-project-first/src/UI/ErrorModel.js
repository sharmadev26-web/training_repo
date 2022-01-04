import ErrorModelClasses from './ErrorModel.module.css';
import PrimaryButton from './PrimaryButton';
const ErrorModel = (props) => {
 return (
     <div>
        <div className={ErrorModelClasses.error_backdrop} onClick={props.errorHideHandler}></div>
        <div className={ErrorModelClasses.error_container}>
            <div className={ErrorModelClasses.error_header}>
                {props.title}
            </div>
            <div className={ErrorModelClasses.error_content}>
                {props.content}
            </div>
            <div className={ErrorModelClasses.error_footer}>
                <PrimaryButton value="Okay" onClick={props.errorHideHandler}></PrimaryButton>
            </div>
        </div>
     </div>
 )
}

export default ErrorModel;