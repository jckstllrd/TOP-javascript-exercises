const getTheTitles = function (bookList) {
  let books = [];
  bookList.forEach((book) => {
    books.push(book.title);
  });
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
