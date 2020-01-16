import React from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop-selectors'

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();

    }

    render() {
    const {match} = this.props;
    
    return (
        <div className="ShopPage">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />

        </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null,mapDispatchToProps)(ShopPage);