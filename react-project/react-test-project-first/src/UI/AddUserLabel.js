import LabelClasses from './AddUserLabel.module.css';
const AddUserLabel = (props) => {
  return (
      <div className={LabelClasses.user_input_label}>{props.user_label}</div>
  )
}
export default AddUserLabel;