function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((left, right) =>
    left.name.last < right.name.last ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idNumber = book.borrows.filter(
      (borrow) => borrow.id === account.id
    ).length;
    return total + idNumber;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessed = books.filter((book) =>
    book.borrows.some((acc) => acc.id === account.id && acc.returned === false)
  );
  possessed.map((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
    return book;
  });
  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
