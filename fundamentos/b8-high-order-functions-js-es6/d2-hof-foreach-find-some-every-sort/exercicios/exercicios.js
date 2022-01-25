const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      releaseYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// ┌─────────┬────┬──────────────────────────────┬─────────────────────┬──────────────────────────────────────────────────┬─────────────┐
// │ (index) │ id │             name             │        genre        │                      author                      │ releaseYear │
// ├─────────┼────┼──────────────────────────────┼─────────────────────┼──────────────────────────────────────────────────┼─────────────┤
// │    0    │ 1  │ 'As Crônicas de Gelo e Fogo' │     'Fantasia'      │ { name: 'George R. R. Martin', birthYear: 1948 } │    1991     │
// │    1    │ 2  │     'O Senhor dos Anéis'     │     'Fantasia'      │  { name: 'J. R. R. Tolkien', birthYear: 1892 }   │    1954     │
// │    2    │ 3  │          'Fundação'          │ 'Ficção Científica' │    { name: 'Isaac Asimov', birthYear: 1920 }     │    1951     │
// │    3    │ 4  │            'Duna'            │ 'Ficção Científica' │    { name: 'Frank Herbert', birthYear: 1920 }    │    1965     │
// │    4    │ 5  │          'A Coisa'           │      'Terror'       │    { name: 'Stephen King', birthYear: 1947 }     │    1986     │
// │    5    │ 6  │    'O Chamado de Cthulhu'    │      'Terror'       │   { name: 'H. P. Lovecraft', birthYear: 1890 }   │    1928     │
// └─────────┴────┴──────────────────────────────┴─────────────────────┴──────────────────────────────────────────────────┴─────────────┘
// Adicione o código do exercício aqui:

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. FIND
// console.table(books);

// const authorBornIn1947 = (callback) => {
//   // escreva aqui o seu código
//   return callback.find((book) => book.author.birthYear === 1947).author.name;
// }

// console.log(authorBornIn1947(books));

// function smallerName(callback) {
//   let nameBook = callback[0].name;
//   // escreva aqui o seu código
//   callback.forEach((book) => {
//     if(book.name.length < nameBook.length){
//       nameBook = book.name;
//     }
//   })

//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }

// console.log(smallerName(books))

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook(callback) {
//   // escreva seu código aqui
//   return callback.find((book) => book.name.length === 26);
// }

// console.log(getNamedBook(books));


// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//   return books.sort((b, a) => a.releaseYear - b.releaseYear)
// }

// console.log(booksOrderedByReleaseYearDesc())


//5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
// }

// console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);
// }

// console.log(someBookWasReleaseOnThe80s());

//7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.some((book) => book.author.birthYear  )

}