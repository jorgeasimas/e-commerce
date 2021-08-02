import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],//gives access to shop
    shop => shop.collections
);

export const selectCollections = (collectionUrlParam) =>
    createSelector(
        [selectCollection],//gives access to collection
        (collections) => 
            collections ? collections[collectionUrlParam] : null);
        //data normalization stores in list of items as objects instead of arrays


export const selectCollectionsObject = createSelector(
    [selectCollection],//gives access to collection
    (collections) => 
        collections ? Object.keys(collections).map((key) => collections[key]) : [] );
    //Object.keys(collection) gives the keys of collection
    //map over array of keys to return the items of  the specific key value in collections


/*
const obj = {a:1, b:2, c:3};
Object.keys(obj);
(3) ["a", "b", "c"]
Object.keys(obj).map(key => obj[key]);
(3) [1, 2, 3]

*/
