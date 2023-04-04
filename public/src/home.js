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

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (b.count > a.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let objA = {};
  books.forEach((book) => {
    const authorId = book.authorId;
    if (objA[authorId]) {
      objA[authorId] += book.borrows.length;
    } else {
      objA[authorId] = book.borrows.length;
    }
  });
  const authorData = authors.map((author) => ({
    name: `${author.name.first} ${author.name.last}`,
    count: objA[author.id] || 0,
  }));
  authorData.sort((a, b) => b.count - a.count);
  return authorData.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
