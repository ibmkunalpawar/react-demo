
export default function Userlist(props){
    
    return(
        <ol>
            {props.usersProp.map(function(user,index){
                return<li>{user.name}</li>
            })}
           
        </ol>
    )
}

