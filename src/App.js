import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans mon Application PWA !</h1>
        <p>
          Ceci est une application progressive web que vous pouvez ajouter à
          votre écran d'accueil.
        </p>
      </header>

      <section>
        <h2>Liste des fonctionnalités :</h2>
        <ul>
          <li>Fonctionne hors ligne</li>
          <li>Expérience en plein écran</li>
          <li>Mise en cache rapide</li>
          <li>Optimisée pour iPhone</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
