import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackgroundImage, ContentContainer } from './menu-items.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    
    return (
        <MenuItemContainer className={`${size}`} onClick={(() => history.push(`${match.url}${linkUrl}`))}>
            <BackgroundImage
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />

                    <ContentContainer>
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>

                    </ContentContainer>
                </MenuItemContainer>
    );
};

export default withRouter(MenuItem);