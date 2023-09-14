import { useRef, useState } from "react";

function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  // Comportement
  const deleteFruit = (id) => {
    const fruitsCopy = [...fruits];

    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    const fruitsCopy = [...fruits];
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    fruitsCopy.push(fruitAAjouter);
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom} <button onClick={() => deleteFruit(fruit.id)}>X</button>
          </li>
        ))}
      </ul>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;

// Gestion de formulaire
