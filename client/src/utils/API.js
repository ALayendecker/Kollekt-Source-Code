import axios from "axios";
//this might host all API functions. Might need to be separated later
export default {
  //Collection
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
  },
  deleteCollection: function(id) {
    return axios.delete("api/collections/delete/" + id);
  },
  //Item
  createItem: function(newItem, colID) {
    console.log("hit createItem in API with newItem=");
    console.log(newItem);
    return axios.post("api/items/create", { newItem, colID });
  },
  deleteItem: function(id) {
    return axios.delete("api/items/delete/" + id);
  }
};
