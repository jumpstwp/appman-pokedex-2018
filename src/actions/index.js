import pokemonList from "../apis/pokemonList";
export const getPokemon = () => {
  return async dispatch => {
    const response = await pokemonList.get("/api/cards");
    dispatch({ type: "GET_POKEMON", payload: response.data });
  };
};
