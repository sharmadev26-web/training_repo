import UserListItem from './UserListItem';
import Card from '../UI/Card';
import NoData from '../UI/NoData';
const UserList = (props) => {
let userList = (<NoData data="No Data Available at this time. Please try adding some value."></NoData>)
if(props.userData && props.userData.length && props.userData.length > 0){
   userList = props.userData.map((item)=> {
      return <UserListItem key={item.id} name={item.name} age={item.age}></UserListItem>
   }); 
}
 return (
     <Card>
        { userList }
     </Card>
     
 )
}
export default UserList;