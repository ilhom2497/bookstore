const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Drama", cover: "https://m.media-amazon.com/images/I/81aY1lxk+9L._SL1500_.jpg" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", cover: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", cover: "https://m.media-amazon.com/images/I/81NLDvyAHrL._SL1500_.jpg" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Drama", cover: "https://m.media-amazon.com/images/I/61dRoDRubtL._SL1500_.jpg" },
    { id: 5, title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", cover: "https://m.media-amazon.com/images/I/61+KbxkEhJL._SL1230_.jpg" },
    { id: 6, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", cover: "https://m.media-amazon.com/images/I/71wXZB-VtBL._SL1200_.jpg" },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Drama", cover: "https://m.media-amazon.com/images/I/71nXPGovoTL._SL1500_.jpg" },
    { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", cover: "https://m.media-amazon.com/images/I/51t0Z0DfEfL._SL1500_.jpg" },
    { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", cover: "https://m.media-amazon.com/images/I/712cDO7d73L._SL1500_.jpg" },
    { id: 10, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Crime", cover: "https://m.media-amazon.com/images/I/71Djqom1jRL._SL1500_.jpg" },
    { id: 11, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", cover: "https://m.media-amazon.com/images/I/81zE42gT3xL._SL1500_.jpg" },
    { id: 12, title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", cover: "https://m.media-amazon.com/images/I/81pwJjgcwwL._SL1500_.jpg" },
    { id: 13, title: "Wuthering Heights", author: "Emily Brontë", genre: "Drama", cover: "https://m.media-amazon.com/images/I/81T34Sem-tL._SL1500_.jpg" },
    { id: 14, title: "The Odyssey", author: "Homer", genre: "Epic", cover: "https://m.media-amazon.com/images/I/71I9il-sk2L._SL1400_.jpg" },
    { id: 15, title: "The Iliad", author: "Homer", genre: "Epic", cover: "https://m.media-amazon.com/images/I/71BkLxixIDL._SL1400_.jpg" },
    { id: 16, title: "Frankenstein", author: "Mary Shelley", genre: "Horror", cover: "https://m.media-amazon.com/images/I/81z7E0uWdtL._SL1500_.jpg" },
    { id: 17, title: "Dracula", author: "Bram Stoker", genre: "Horror", cover: "https://m.media-amazon.com/images/I/71iNS3fjLOL._SL1499_.jpg" },
    { id: 18, title: "The Divine Comedy", author: "Dante Alighieri", genre: "Epic", cover: "https://m.media-amazon.com/images/I/81SgX6pVaWL._SL1200_.jpg" },
    { id: 19, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Drama", cover: "https://m.media-amazon.com/images/I/81XwoNcQbwS._SL1500_.jpg" },
    { id: 20, title: "Les Misérables", author: "Victor Hugo", genre: "Historical", cover: "https://m.media-amazon.com/images/I/81e1NPAQJmL._SL1500_.jpg" },
    { id: 21, title: "Anna Karenina", author: "Leo Tolstoy", genre: "Drama", cover: "https://m.media-amazon.com/images/I/71O3PTUA3vL._SL1400_.jpg" },
    { id: 22, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", genre: "Adventure", cover: "https://m.media-amazon.com/images/I/61uZMVayn2L._SL1500_.jpg" },
    { id: 23, title: "The Adventures of Tom Sawyer", author: "Mark Twain", genre: "Adventure", cover: "https://m.media-amazon.com/images/I/61bG4WYYXhL._SL1500_.jpg" },
    { id: 24, title: "Great Expectations", author: "Charles Dickens", genre: "Drama", cover: "https://m.media-amazon.com/images/I/81tj5T6nOvL._SL1500_.jpg" },
    { id: 25, title: "David Copperfield", author: "Charles Dickens", genre: "Drama", cover: "https://m.media-amazon.com/images/I/710XacbSY8L._SL1499_.jpg" },
    { id: 26, title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", cover: "https://m.media-amazon.com/images/I/61G+x4O65lL._SL1400_.jpg" },
    { id: 27, title: "Don Quixote", author: "Miguel de Cervantes", genre: "Comedy", cover: "https://m.media-amazon.com/images/I/81Ys8iemw+L._SL1500_.jpg" },
    { id: 28, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Drama", cover: "https://m.media-amazon.com/images/I/91uns-1GnQL._SL1500_.jpg" },
    { id: 29, title: "Madame Bovary", author: "Gustave Flaubert", genre: "Drama", cover: "https://m.media-amazon.com/images/I/71gay59C7IL._SL1500_.jpg" },
    { id: 30, title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical", cover: "https://m.media-amazon.com/images/I/51KnUfnbdQL.jpg" }
];

function renderBooks(list) {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const genreSelect = document.getElementById("genres").value;
    const booklist = document.getElementById("books");

    booklist.innerHTML = "";

    let filteredBooks = [];

    
    if (searchInput !== "") {
        filteredBooks = list.filter(book => {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            const genre = book.genre.toLowerCase();
            return title.includes(searchInput) || author.includes(searchInput) || genre.includes(searchInput);
        });
    } else {
        filteredBooks = list.filter(book => {
            return genreSelect === "All-genres" || book.genre === genreSelect;
        });
    }

    if (filteredBooks.length === 0) {
        booklist.innerHTML = "<p>No books found.</p>";
    } else {
        filteredBooks.forEach(book => {
            booklist.innerHTML += `
                <div class="cover">
                        <div class="book-title">
                            <img src=${book.cover} alt=${book.title}>
                            <span id="genre">${book.genre}</span>
                        </div>
                        <div class="book-info">
                            <h3>${book.title}</h3>
                            <p>${book.author}</p>
                        </div>
                    </div>
            `;
        });
    }
}

document.getElementById("search-button").addEventListener("click", function() {
    renderBooks(books);
});

document.getElementById("genres").addEventListener("change", function() {
    renderBooks(books);
});

document.addEventListener("DOMContentLoaded", function() {
    renderBooks(books);
});