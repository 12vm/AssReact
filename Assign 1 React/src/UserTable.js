import React from 'react'
import '../style/userTable.css'

const UserTable=({arr1})=>{
    
    return(
        <div class='userTable'>
        <h1>Table for User Data</h1>
        <table>
            <tr>
                <th>
                    name
                </th>
                <th>
                    age
                </th>
                <th>
                    email
                </th>
            </tr>

            {arr1.map(myFunction)}
        </table>

</div>

    )
}

function myFunction(item){
    return(
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
        </tr>

    )
}

export default UserTable;
