var books = function () {};

books.prototype.getbooksList = function () {
    var books = [
        {   'id': '1',
            'name': 'Harry potter',
            'author': 'J K Rowling',
            'description': 'This is a fantasy novel for all age groups',
            'image-url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwNgXjTYjQ29QpLlWCuXXxDhqSE7ZUZhA9_sqW5_w6T3t4tG2',
            'rating': '5',
        },
        {   'id': '2',
            'name': 'Educational and Professional Books',
            'author': 'Jack',
            'description': 'is a normally tubular weapon or other device designed to discharge projectiles or other ',
            'image-url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RD4UeTYYedYrmbsN_QSilbD0hMCOo15lo78V297CEBKKVymzTA',
            'rating': '1',
        },
        {   'id': '3',
            'name': 'Harry potter and prisoner of azkaban',
            'author': 'Harry',
            'description': ' Thursday for our new assortment of featured firearms. See our best gun deal',
            'image-url': 'https://s-media-cache-ak0.pinimg.com/originals/39/0b/70/390b7091e6edd67ea7eecb6f6ba113d8.jpg',
            'rating': '4',
        },
        {   'id': '4',
            'name': 'Fiction & Non-Fiction Books',
            'author': 'Bill',
            'description': 'uy books online from millions of book titles across various categories. Online shopping for books & novels',
            'image-url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jyO7oiUzZmo2w8I83ZnoYuwJO6RLDaJTbkfAzE9q54cqWf8tVw',
            'rating': '2',
        },
        {   'id': '5',
            'name': 'Philosophy Books',
            'author': 'Danny',
            'description': 'mazon.in Books Store offers you millions of titles across categories like Children',
            'image-url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZLoNuidU6omRYRX7P6DLSwypq_bxuoUhNWzkp0wFKK3rPPzn',
            'rating': '3',
        },
        {   'id': '6',
            'name': 'Indian Writing Books',
            'author': 'Pepe',
            'description': ' Huge Collection of Books. Shop Online for India',
            'image-url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqyhtjamk3iwOYJjOebVt1qBU89acXSiyT_t6PDF6zg4mJjmjrA',
            'rating': '4',
        }
    ];

    return books;
}; 
module.exports = books;