import React, {useEffect, lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';

function ShopPage({fetchCollectionsStart, match}) {
    const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
    const CollectionPageContainer = lazy(() => import('../collection/collection.container'))

    useEffect(() => {
        fetchCollectionsStart();
    },[])

    return (
        <div className="ShopPage">
            <Suspense fallback={Spinner}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </Suspense>

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);