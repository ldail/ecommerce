import './collection.styles.scss';
import {connect} from 'react-redux';
import React from 'react';

import {selectCollection} from '../../redux/shop/shop-selectors';

const CollectionPage = () => {
    return (
        <div className="CollectionPage">
            <h2>Collection Page</h2>
            
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);