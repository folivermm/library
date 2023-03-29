function getTotalBooksCount(books) {
  return books.reduce((total, book) => {
    return books.length;
  }, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((total, account) => {
    return accounts.length;
  }, 0);
}

function getBooksBorrowedCount(books) {
  let outNum = 0;
  books.forEach((book) => {
    book.borrows.forEach((item) => {
      if (item.returned === false) {
        outNum++;
      }
    });
  });
  return outNum;
}

function getMostCommonGenres(books) {
  let obj = {};
  books.forEach((book) => {
    if (obj[book.genre]) {
      obj[book.genre]++;
    } else {
      obj[book.genre] = 1;
    }
  });
  let bookGenre = [];
  for (let [key, value] of Object.entries(obj)) {
    bookGenre.push({ name: key, count: value });
  }
  bookGenre.sort((bookA, bookB) => (bookB.count > bookA.count ? 1 : -1));
  return bookGenre.slice(0, 5);
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
