function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let booksBorrow = [];
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const chekedIn = books.filter((book) => book.borrows[0].returned === true);
  booksBorrow.push(checkedOut, chekedIn);
  return booksBorrow;
}

function getBorrowersForBook(book, accounts) {
  let borrower = book.borrows.map((books) => {
    let acc = accounts.find((account) => account.id === books.id);
    return { ...books, ...acc };
  });
  return borrower.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
