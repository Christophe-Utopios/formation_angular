import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../utils/services/pokemon.service';
import { Pokemon } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-pokedex',
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  removePokemon(pokemon: Pokemon): void {
    this.pokemonService.removePokemon(pokemon);
  }
}
