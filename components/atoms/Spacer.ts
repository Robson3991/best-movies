import styled from 'styled-components';

interface SpacerProps {
  size: number;
}

const Spacer = styled.div<SpacerProps>`
  height: ${({ size }) => `${size}px`};
  width: 100%;
`;

export default Spacer;
