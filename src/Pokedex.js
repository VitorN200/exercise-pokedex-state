import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.fireButton = this.fireButton.bind(this);
        this.psyButton = this.psyButton.bind(this);
        this.state = {
            pokemonObj: 0,
            pokemonArray: this.props.pokemons
        }
    }

    handleClick = () => {
        if (this.state.pokemonArray[((this.state.pokemonObj) + 1)] === undefined) {
            this.setState((previosState, _props) => ({
                pokemonObj: -1
            }));
        }
        this.setState((previosState, _props) => ({
            pokemonObj: previosState.pokemonObj + 1
        }));
    }

    fireButton = () => {
        this.setState((previosState, _props) => ({
            pokemonArray: this.props.pokemons.filter((type) => type.type === 'Fire')
        }));
    }

    psyButton = () => {
        this.setState((previosState, _props) => ({
            pokemonArray: this.props.pokemons.filter((type) => type.type === 'Psychic')
        }));
    }

    render() {
        return (
            // <div className="pokedex">
            //     {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            // </div>
            < div className="pokedex" >
                <Pokemon pokemon={this.state.pokemonArray[(this.state.pokemonObj)]} />
                <div>
                    <button className="typeButton" onClick={this.fireButton}>Fire</button>
                    <button className="typeButton" onClick={this.psyButton}>Psychic</button>
                </div>
                <button className="nextPokemon" onClick={this.handleClick}>Próximo Pokémon</button>
            </div >
        );
    }
}

export default Pokedex;