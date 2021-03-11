import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav `
background: black;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: white;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
color: white;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
flex-direction: column;
width: 100%;
height: calc(100vh - 80px);
position: absolute;
top: 80px;
left: ${({ click }) => (click ? 0 : '-100%')};
opacity: 1;
transition: all 0.4s ease;
background-color: rgba(0, 0, 0, 0.85);
backdrop-filter: blur(6px);
`;

export const NavItem = styled.li`
height: 100px;
width: 260px;
font-size: 2.5rem;
`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
padding: 2rem;
height: 100%;
width: 100%;
text-align: center;

&:hover {
    color: gray;
    transform: scale(1.1,1.1);
    transition: all 0.3s ease;
}
`;