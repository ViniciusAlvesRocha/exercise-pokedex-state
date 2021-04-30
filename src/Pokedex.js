import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            indexPokemon: 0
        }
    }
    handleClick = () => {
        this.setState((indexAnterior, _props) => {
            if (this.state.indexPokemon === pokemons.length - 1) {
                return ({
                    indexPokemon: 0
                }); 
            }
            return ({
            indexPokemon: indexAnterior.indexPokemon +1
        });
    })
    }
    render() {
        const { pokemons } = this.props;
        return (
            <>
                <div className="pokedex">
                    <Pokemon key={pokemons[this.state.indexPokemon].id} pokemon={pokemons[this.state.indexPokemon]} />
                </div>
                <button onClick={this.handleClick}>Próximo</button>
            </>
        );
    }
}
export default Pokedex;