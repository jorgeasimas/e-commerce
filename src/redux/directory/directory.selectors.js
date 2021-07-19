import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],//which is the state.cart
    directory => directory.sections 
)