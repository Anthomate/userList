import React from "react";
import './myList.css';

function MyList(props) {

    return (

        <div id="user-list-container">

            <p id="user-list-title">Liste des utilisateurs :</p>

            <div className="user-list">

            <ul className="users">
                {props.data.map(user => (
                    <li className="user" key={user.index}>
                        <p className="userName">Nom : {user.name}</p>
                        <p className="userAge">Âge : {user.age} ans</p>
                    </li>
                ))}
            </ul>

            </div>

        </div>

    )
}

export default MyList;