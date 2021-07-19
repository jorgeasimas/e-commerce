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
        //finding collenction.id matching the url paramenter of COLLECTION_ID_MAP
);
