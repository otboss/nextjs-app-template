import styled from 'styled-components';
import { Theme } from './styles/Theme';

export const footerHeight: string = "270px";

const Foot = styled.div`
    height: ${footerHeight};
    background-color: ${Theme.primaryColorDarker};
    display: flex;
    justify-content: center;
`;


export const Footer = (props) => {
    return (
        <Foot>
            footer
        </Foot>
    );
}