import React from "react";
import './Users.css';

function Users({name,city,age}) {
    // const usersName = 'Diya';
    // const usersCity = 'valsad';
    // const usersAge = 21;

    return (
        <div className="users">
        <h2>{name}</h2>
       <div className="users__city">
        <h2>{city}</h2>
        <div className="users__age">{age}</div>
       </div>
        </div>
    )
}


export default Users;
