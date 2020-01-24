import React, {useEffect} from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {connect} from 'react-redux';

function ShopPage({fetchCollectionsStart, match}) {

    useEffect(() => {
        fetchCollectionsStart();
    },[])

    return (
        <div className="ShopPage">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);