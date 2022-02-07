import NoDataClasses from './NoData.module.css';
const NoData = (props) => {
 return (
     <div className={NoDataClasses.no_data}>{props.data}</div>
 )
}
export default NoData;