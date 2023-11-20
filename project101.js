let books = [];
  
  function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
  }
  
  function updateBook(id, newTitle, newAuthor, newPrice, newQuantity) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === id) {
        books[i] = [id, newTitle, newAuthor, newPrice, newQuantity];
        return; 
      }
    }
    console.log("The book is unavailable");
  }
  
  function deleteBook(id) {
    let newBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] !== id) {
        newBooks.push(books[i]);
      }
    }
    books = newBooks;
  }
  
  function displayBooks() {
    for (let i = 0; i < books.length; i++) {
      console.log(`ID: ${books[i][0]}, Title: ${books[i][1]}, Author: ${books[i][2]}, Price: ${books[i][3]}, Quantity: ${books[i][4]}`);
    }
  }
  
  function getBookInfo(id) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === id) {
        console.log(`ID: ${books[i][0]}, Title: ${books[i][1]}, Author: ${books[i][2]}, Price: ${books[i][3]}, Quantity: ${books[i][4]}`);
        return; 
      }
    }
    console.log("The book is unavailable");
  }
  


  function sellBook(bookTitle, quantityRequested, customerBalance) {
    
    let bookFound = books.find(book => book[1] === bookTitle);
    
    if (!bookFound) {
      return "The book is unavailable";
    }
  
    let price = bookFound[3];
    let stockQuantity = bookFound[4];
  
    
    if (quantityRequested > stockQuantity) {
      return "out of stock";
    }
  
    
    let totalCost = price * quantityRequested;
    if (customerBalance < totalCost) {
      return "Insufficient balance";
    }
  
    bookFound[4] -= quantityRequested;
  
    let invoice = `invoice: 
      book: ${bookTitle}
      quantity: ${quantityRequested}
      totalPrice: ${totalCost}
      balance: ${customerBalance - totalCost}`;
  
    return invoice;
  }
  
 

  addBook(1, "Start with why", "Simon Sinek", 80.0, 13);
  addBook(2, "But how do it know", "J. Clark Scott", 59.9, 22);
  addBook(3, "Clean Code", "Robert Cecil Martin", 50.0, 5);
  addBook(4, "Zero to One", "Peter Thiel", 45.0, 12);
  addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);

   console.log( sellBook("Start with why", 2, 200));

   updateBook(3, "test", "test", 35.0, 10);
   deleteBook(2);
   getBookInfo(3);
   displayBooks();
   
  
  