import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';

import React from 'react';
import {selectCollections} from '../../redux/shop/shop-selectors';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="CollectionsOverview">
            {collections.map(({id, ...otherCollectionProps}) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);