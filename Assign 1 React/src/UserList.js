import React from 'react'
import '../style/userList.css'

const UserList= ({arr}) => {

    return(
        <div className='userList'>
        <h1>User List</h1>
        <ul>
            {arr.map((item)=>{
                <li key={item.id}>
                    {item.name}
                    {item.age}
                    {item.email}
                </li>

            }
)}
        </ul>
        </div>
    )
}

export default UserList;