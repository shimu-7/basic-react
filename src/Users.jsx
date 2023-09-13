import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){

    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const styles={
        border:'5px solid tomato',
        borderRadius:'20px',
        padding: '5px',
        margin: '5px'
    }
    return(
        <div style={styles}>
            <h3>User: {users.length}</h3>
            {
                users.map(user=><User user={user}></User>)
            }
        </div>

    )
}