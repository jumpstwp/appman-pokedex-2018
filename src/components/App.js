import React, { Component } from "react";
import "./App.css";
import PokemonList from "./PokemonList";
import Footer from "./Footer";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header"> My Pokedex </h1>
        <PokemonList />
        <Footer />
      </div>
    );
  }
}

export default App;