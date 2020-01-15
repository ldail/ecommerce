import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles'
import CollectionPreview from '../preview-collection/preview-collection.component';

import React from 'react';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({collections}) => {
    console.log(collections);
    return (
        <CollectionsOverviewContainer>
            {collections.map(({id, ...otherCollectionProps}) => {
                console.log(otherCollectionProps);
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </CollectionsOverviewContainer>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);