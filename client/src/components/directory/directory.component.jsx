import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { DirectoryContainer } from './directory.styles';

const Directory = ({sections}) => {
        return (
            <DirectoryContainer>
                {sections.map(({id, ...otherSectionProps}) => {
                    return <MenuItem key={id} {...otherSectionProps} />
                })}
            </DirectoryContainer>
        );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);