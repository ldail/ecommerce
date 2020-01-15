import React from 'react';
import {CollectionPreviewContainer} from './preview-collection.styles';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => index < 4)
                    .map((item) => <CollectionItem key={item.id} item={item} />)}
            </div>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;