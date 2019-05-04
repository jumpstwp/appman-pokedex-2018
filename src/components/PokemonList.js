import React from "react";
import "./PokemonList.css";
import { connect } from "react-redux";
import { getPokemon } from "../actions";
import Search from "./Search";
import Card from "./Card";

class PoekemonList extends React.Component {
  componentDidMount() {
    this.props.getPokemon();
  }

  renderList() {
    const { pokemon } = this.props;
    console.log(pokemon.pokemons.cards);
    if (!pokemon.pokemons.cards) {
      return <div> Loading... </div>;
    }

    return pokemon.pokemons.cards.map(pokemon => {
      return <Card key={pokemon.id} pokemonData={pokemon} />;
    });
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value);
  }

  render() {
    console.log(this.props.pokemon);
    return (
      <div className="modal">
        <div className="modal-content">
          <Search />
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pokemon: state.pokemon };
};
//Connect เพื่อส่ง Action Creator
export default connect(
  mapStateToProps,
  { getPokemon }
)(PoekemonList);
