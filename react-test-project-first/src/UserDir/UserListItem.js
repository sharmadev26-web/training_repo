const UserListItem = (props) => {
 const itemStyle = {
    border: '1px solid rgb(165 167 172 / 95%)',
    lineHeight: '15px',
    margin: '10px 0px',
    padding: '10px',
    borderRadius: '4px',
    fontWeight: 'bold'
 }
 return (
     <div style={itemStyle}>{props.name}({props.age})</div>
 )
}
export default UserListItem