import axios from "axios";
//this might host all API functions. Might need to be separated later
export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/saved");
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/saved/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
  createCollection: function(objectWithParameters) {
    return axios.post("api/collections/create", objectWithParameters);
  },
  getCollectionByType: function(query) {
    console.log(query);
    return axios.get("/api/collections/bytype/" + query);
  },
  getCollectionById: function(query) {
    console.log("hit getcollectionbyid in API with query= " + query);
    console.log(query);
    return axios.get("/api/collections/byid/" + query);
  },
  getAllCollections: function() {
    return axios.get("/api/collections/all");
  }
};
