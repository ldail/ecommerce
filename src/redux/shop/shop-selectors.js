import {createSelector} from 'reselect';

const collections = state => state.shop;

const selectCollections = createSelector(
    [collections],
    (shop) => shop.collections
)

export default selectCollections