import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],//gives access to shop
    shop => shop.collections
);

export const selectCollections = (collectionUrlParam) =>
    createSelector(
        [selectCollection],//gives access to collection
        collections => collections[collectionUrlParam]
        //data normalization stores in list of items as objects instead of arrays
);

export const selectCollectionsObject = createSelector(
    [selectCollection],//gives access to collection
    collections => Object.keys(collections).map(key => collections[key])
);