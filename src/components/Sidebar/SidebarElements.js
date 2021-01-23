import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
// import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside `
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #EFD9D5;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media screen and (min-width: 768px){
    display: none;
  }
`
export const CloseIcon = styled(FaTimes) `
  color: #994C38;
`

export const Icon = styled.div `
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div `
  color: #fff;
`

export  const SidebarMenu = styled.ul `
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;

`

export const SidebarLink = styled(LinkS) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #994C38;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #C26868;
    transition: 0.2s ease-in-out;
    font-weight: 700;
    transform: scale(1.2);
  }
`
// opt
// export const SidebarRoute = styled(LinkR) `
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   $:hover{
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `


