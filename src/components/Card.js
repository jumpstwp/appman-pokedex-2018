import React from "react";

import CuteImage from "../assets/cute.png";

class Card extends React.Component {
  getHp() {
    const hp = parseInt(this.props.pokemonData.hp);
    return hp > 100 ? 100 : hp;
  }

  getStr() {
    const str = this.props.pokemonData.attacks
      ? this.props.pokemonData.attacks.length * 50
      : 0;
    return str > 100 ? 100 : str;
  }

  getWeak() {
    const weak = this.props.pokemonData.weak
      ? this.props.pokemonData.weak.reduce((p, c) => {
          const cweak = p.value.replace(/[^0-9]/, "");
          return parseInt(cweak) + c;
        }, 0)
      : 0;
    const calculateWeak = weak * 100;
    return calculateWeak > 100 ? 100 : calculateWeak;
  }

  render() {
    const pokemon = this.props.pokemonData;
    return (
      <div className="card">
        <div className="container">
          <img src={pokemon.imageUrl} alt="card_img" className="card-img" />
          <div className="content">
            <h4>{pokemon.name}</h4>
            <p>
              HP
              <br />
              STR
              <br />
              WEAK
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
