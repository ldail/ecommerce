import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';

import React from 'react';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';

const CollectionsOverview = ({collections}) => {
    console.log(collections);
    return (
        <div className="CollectionsOverview">
            {collections.map(({id, ...otherCollectionProps}) => {
                console.log(otherCollectionProps);
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);