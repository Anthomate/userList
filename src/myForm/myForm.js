import React, {useEffect, useState} from 'react';
import MyList from '../myList/myList';
import './myForm.css';

function MyForm() {
    
    const [user, setUser] = useState([
        { name: 'Anthony', age: 23 },
        { name: 'Aloïs', age: 22 },
        { name: 'Oceane', age: 20 },
        { name: 'Maëlys', age: 22 },
        { name: 'Mathis', age: 22 },
        { name: 'Raphael', age: 21 },
        { name: 'Hugo', age: 22 },
        { name: 'Caroline', age: 22 },
        { name: 'Sabrina', age: 23 }
    ]); //On déclare un tableau d'objet 'user' et on met à jour avec setUser
    const [name, setName] = useState(''); // On déclare 'name' et on met à jour avec setName
    const [age, setAge] = useState(''); // On déclare 'age' et on met à jour avec setAge
    const [isValid, setIsValid] = useState(false); // On déclare 'isValid' avec la valeur false et on met à jour avec setIsValid

    /* On contrôle le formulaire grâce à useEffect, on regarde si les inputs name et age sont vide et si age est un nombre
    * Si le formulaire est vide ou qu'on entre quelque chose de différent d'un nombre dans age alors le bouton de création reste caché.
    * Si le formulaire est correctement remplie on affecte la valeur true à isValid et on fait donc apparaitre le bouton de validation. */

    useEffect(() => {
        if (name !== '' && age !== '' && !isNaN(age)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [name, age]);

    /* Ici on va gérer les évenements
    * Si on valide le formulaire on va mettre à jour le tableau user en y ajoutant un user avec son nom et son age */

    const submitForm = (e) => {
        e.preventDefault();
        setUser([...user, { name: name, age: age }]);
        setName('');
        setAge('');
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

    return (
        <main>
            <div className="centered-container">
                <form className="form" onSubmit={submitForm}>
                    <input className="text-input" type="text" value={name} onChange={handleChangeName} placeholder="Nom" />
                    <input className="text-input" type="text" value={age} onChange={handleChangeAge} placeholder="Age" />
                    <button className="submit-button" type="submit" hidden={!isValid}>Créer l'utilisateur</button>
                </form>
            </div>
            <MyList data={user}/>
        </main>
    );
}

export default MyForm;