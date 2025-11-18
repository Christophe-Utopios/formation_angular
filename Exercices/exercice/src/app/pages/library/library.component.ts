import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiPipe } from '../../utils/pipes/emoji.pipe';
import { Book } from '../../utils/types/book.type';


@Component({
  selector: 'app-library',
  imports: [EmojiPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  books: Book[] = [
    { id: 0, title: 'Livre 1', author: 'Auteur 1', isRead: false },
    { id: 1, title: 'Livre 2', author: 'Auteur 2', isRead: true },
    { id: 2, title: 'Livre 3', author: 'Auteur 3', isRead: true },
    { id: 3, title: 'Livre 4', author: 'Auteur 4', isRead: false },
    { id: 4, title: 'Livre 5', author: 'Auteur 5', isRead: true },
  ];

  toggleIsRead(book: Book) {
    book.isRead = !book.isRead;
  }
}
