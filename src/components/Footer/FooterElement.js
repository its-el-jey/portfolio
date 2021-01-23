import styled from 'styled-components';
import '../variables.css';

export const Footer = styled.div `
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;
  background: var(--black);
  color: var(--white);
`
export const FooterName = styled.div `
  font-size: 2rem;
  font-weight: 700;
`

export const FooterSocial = styled.div `
  display: flex;
  column-gap: 2rem;
  cursor: pointer;

  &:hover {
    color: var(--blue);
  }
`
export const FooterData = styled.div `
  text-align: center;
  display: grid;
  row-gap: 0.5rem;
  font-size: 12px;
`

export const Span = styled.div `
  color: var(--blue);
`

export const SpanData = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.2rem;
`

