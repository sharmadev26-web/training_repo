import PrimaryButtonClasses from './PrimaryButton.module.css';
const PrimaryButton = (props) => {
const userAdditionHandler = () => {
    props.onClick();
}
return (
    <button className={PrimaryButtonClasses.button} onClick={props.onClick ? props.onClick : userAdditionHandler}>{props.value}</button>
)
}
export default PrimaryButton;