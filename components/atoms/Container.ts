import styled from 'styled-components';

interface ContainerProps {
  full?: boolean;
  left?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ left }) => (left ? `flex-start` : `center`)};
  justify-content: center;
  width: 100%;
  ${({ full }) => !full && `max-width: 1200px`};
  margin: 0 auto;
  padding: 0 50px;
  border-radius: 5px;
`;

export default Container;
