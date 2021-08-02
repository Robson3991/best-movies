import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid rgba(var(--color-black-rgb), 0.2);
  width: 100%;
  max-width: 800px;
  cursor: pointer;
  transition: background-color var(--transition);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    background-color: rgba(var(--color-primary-rgb), 0.2);
  }
`;

export const Index = styled.div`
  width: 50px;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;

export const Main = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.6rem;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  font-size: 1.9rem;
`;

export const Category = styled.span`
  margin-top: auto;
  font-size: 1.4rem;
`;

export const Director = styled.span`
  margin-top: 8px;
  color: var(--color-darkgrey);
  font-size: 1.4rem;
`;
