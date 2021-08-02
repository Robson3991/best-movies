import styled from 'styled-components';
import Link from 'next/link';
import Container from 'components/atoms/Container';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0;
  background-color: var(--color-primary);
  margin-bottom: 50px;

  a {
    color: var(--color-white);
    transition: color var(--transition);

    &:hover {
      color: var(--color-darkgrey);
    }
  }
`;

const Header = () => (
  <Wrapper>
    <Container full left>
      <Link href="/">Home page</Link>
    </Container>
  </Wrapper>
);

export default Header;
