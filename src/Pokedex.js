import React from 'react';
import Pokemon from './Pokemon';
class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            indexPokemon: 0,
            typePokemon: 'Fire'
        }
    }
  
    render() {
        const { pokemons } = this.props;
        const getFirePokemons = (pokemons) => (
            pokemons.filter((pokemon) => pokemon.type === 'Fire')
        )

        const firePokemons = getFirePokemons(pokemons);

        const getPsychicPokemons = (pokemons) => (
            pokemons.filter((pokemon) => pokemon.type === 'Psychic')
        )

        const psychicPokemons = getPsychicPokemons(pokemons);

        const changeTypePokemon = (element) => {
            this.setState({
                indexPokemon: 0
            });
            const type = (element.target.innerText)
            this.setState({
                typePokemon: type
            })
            console.log(this.state.typePokemon);
        }

        const handleClick = () => {
            this.setState((indexAnterior, _props) => {
                if (this.state.indexPokemon === firePokemons.length - 1
                
                ||   this.state.psychicPokemons === firePokemons.length - 1 ) {
                    return ({
                        indexPokemon: 0
                    });
                }
                return ({
                    indexPokemon: indexAnterior.indexPokemon + 1
                });
            })
        }

        return (
            <>
                <button onClick={changeTypePokemon}>Fire</button>
                <button onClick={changeTypePokemon}>Psychic</button>
                <div className="pokedex">
                    {(this.state.typePokemon === 'Fire') &&
                        <Pokemon key={firePokemons[this.state.indexPokemon].id} pokemon={firePokemons[this.state.indexPokemon]} />
                    }

                    {
                        (this.state.typePokemon === 'Psychic') &&
                        <Pokemon key={psychicPokemons[this.state.indexPokemon].id} pokemon={psychicPokemons[this.state.indexPokemon]} />
                    }
                </div>
                <button onClick={handleClick}>Próximo</button>
            </>
        );
    }
}
export default Pokedex;