import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;

`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 0;

    @media screen and (min-width: 768px) {
        width: 70px;
        padding: 25px;
    }
`;


export const OptionsContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        width: 50%;
    }

`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;