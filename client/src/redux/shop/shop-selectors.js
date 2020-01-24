import {createSelector} from 'reselect';

const collections = state => state.shop;

export const selectCollections = createSelector(
    [collections],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [collections],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [collections],
    shop => !!shop.collections
)