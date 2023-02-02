import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

export interface ContenGridProps extends HTMLAttributes<HTMLDivElement> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  rowGap?: number;
}

const ContentGrid = ({
  leftElement,
  rightElement,
  rowGap = 0,
}: ContenGridProps) => {
  return (
    <Container rowGap={rowGap}>
      {leftElement}
      {rightElement}
    </Container>
  );
};
export default ContentGrid;

interface ContainerProps {
  rowGap: number;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 398px);
  grid-template-rows: auto;
  grid-column-gap: 80px;
  grid-row-gap: ${({ rowGap }) => `${rowGap}px`};
`;