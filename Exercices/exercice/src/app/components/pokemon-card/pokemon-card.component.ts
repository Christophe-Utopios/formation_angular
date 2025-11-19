import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonService } from '../../utils/services/pokemon.service';

type PokemonType = 'poison' | 'feu' | 'psy' | 'eau' | 'sol' | 'vol' | 'fée' | 'dragon' | 'roche';

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: any; // Assuming 'pokemon' is passed as an input
<<<<<<< HEAD
  @Output() delete = new EventEmitter<void>()
=======
  @Output() delete = new EventEmitter<void>();

  constructor(private pokemonService: PokemonService) {}

  addToPokedex(): void {
    this.pokemonService.addPokemon(this.pokemon);
  }
>>>>>>> a7487abf58a32d376486a12b1c09f2f8e4cdfc22

  // Function to return a class based on the type
  getTypeColor(type: string): string {
    const typeColors: Record<PokemonType, string> = {
      poison: 'bg-purple-600', // Poison = Violet
      feu: 'bg-red-600', // Feu = Rouge
      psy: 'bg-pink-500', // Psy = Rose
      eau: 'bg-blue-500', // Eau = Bleu
      sol: 'bg-yellow-600', // Sol = Jaune/Brun
      vol: 'bg-indigo-400', // Vol = Indigo/Gris
      fée: 'bg-pink-300', // Fée = Rose clair
      dragon: 'bg-purple-700', // Dragon = Violet foncé
      roche: 'bg-gray-500', // Roche = Gris
    };

    // Utilisation d'une assertion de type pour éviter l'erreur
    return typeColors[type as PokemonType] || 'bg-gray-300'; // Default color if type not found
  }
}
