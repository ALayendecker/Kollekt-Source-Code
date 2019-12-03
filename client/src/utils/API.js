import axios from "axios";
//this might host all API functions. Might need to be separated later
export default {
  //Collection
  createCollection: function(newCollection) {
    return axios.post("api/collections/create", newCollection);
  },
  getCollectionByType: function(query) {
    console.log(query);
    return axios.get("/api/collections/bytype/" + query);
  },
  getOneCollectionByType: function(query) {
    console.log(query);
    return axios.get("/api/collections/onebytype/" + query);
  },
  getCollectionById: function(query) {
    console.log("hit getcollectionbyid in API with query= " + query);
    console.log(query);
    return axios.get("/api/collections/byid/" + query);
  },
  getAllCollections: function() {
    return axios.get("/api/collections/all");
  },
  getAllCollectionsFromProfile: function(id) {
    return axios.get("/api/collections/byprofile/" + id);
  },
  deleteCollection: function(collectionId, profileId) {
    return axios.delete(
      "api/collections/delete/" + collectionId + "/" + profileId
    );
  },
  updateCollection: function(id, changes) {
    return axios.put("api/collections/update/" + id, changes);
  },
  //Item
  createItem: function(newItem) {
    console.log(newItem);
    return axios.post("api/items/create", newItem);
  },
  // deleteItem: function(id) {
  //   return axios.delete("api/items/delete/" + id);
  // }
  deleteItem: function(itemId, collectionId) {
    return axios.delete("api/items/delete/" + itemId + "/" + collectionId);
  },
  updateItem: function(id, changes) {
    return axios.put("api/items/update/" + id, changes);
  }
};
