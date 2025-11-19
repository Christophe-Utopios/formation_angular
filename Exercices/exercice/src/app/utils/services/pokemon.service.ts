import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[] = [];

  constructor() {}

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  removePokemon(pokemon: Pokemon): void {
    const index = this.pokemons.indexOf(pokemon);
    if (index > -1) {
      this.pokemons.splice(index, 1);
    }
  }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
