import React, { useState } from "react";

export function Todo() {
    const [tache, setTache] = useState('');
    const [taches, setTaches] = useState([]);

    function handleChange(e) {
        setTache(e.target.value);
    }

    function handleClick() {
        if (tache.trim() !== '') {
            setTaches([...taches, tache]);
            setTache('');
        }
    }

    function handleDelete(index) {
        const tachesMisesAJour = [...taches];
        tachesMisesAJour.splice(index, 1);
        setTaches(tachesMisesAJour);
    }

    function handleUpdate(index, nouvelleTache) {
        const tachesMisesAJour = [...taches];
        tachesMisesAJour[index] = nouvelleTache;
        setTaches(tachesMisesAJour);
    }

    return (
        <div>
            <div>
                <input
                    onChange={handleChange}
                    value={tache}
                    name="tache"
                    type="text"
                    placeholder="Entrez une nouvelle tâche"
                />
            </div>
            <br />

            <button onClick={handleClick}>Ajouter</button>

            <br />

            <ul>
                {taches.map((tache, index) => (
                    <li key={index}>
                        {tache}
                        <button onClick={() => handleDelete(index)}>Supprimer</button>
                        <button onClick={() => handleUpdate(index, prompt('Nouvelle tâche:', tache))}>Modifier</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
