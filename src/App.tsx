import React, { FunctionComponent, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
    const [name, setName] = useState<String>('React');
    const [pokemons, setPokemons] = useState(POKEMONS);

    return (
    <><h1>Bonjour, {name} !</h1><p>Il y a couramment {POKEMONS.length} Pokémons dans le PokéDex.</p></>
)
}

export default App;