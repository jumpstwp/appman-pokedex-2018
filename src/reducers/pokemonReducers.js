const INITIALIZE_STATE = {
  pokemons: [],
  displayedPokemons: []
};
export default (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemons: action.payload
      };
    case "FILTER_POKEMON":
      return {
        ...state,
        displayedPokemons: action.payload
      };

    default:
      return state;
  }
};
