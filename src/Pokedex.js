import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            pokemonObj: 0
        }
    }

    handleClick = () => {
        if (this.props.pokemons[((this.state.pokemonObj) + 1)] === undefined) {
            this.setState((previosState, _props) => ({
                pokemonObj: -1
            }));
        }
        this.setState((previosState, _props) => ({
            pokemonObj: previosState.pokemonObj + 1
        }));
    }

    render() {
        return (
            // <div className="pokedex">
            //     {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            // </div>
            <div className="pokedex">
                <Pokemon pokemon={this.props.pokemons[(this.state.pokemonObj)]} />
                <button className="nextPokemon" onClick={this.handleClick}>Próximo Pokémon</button>
            </div>
        );
    }
}

export default Pokedex;