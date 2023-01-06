/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';
import { FlexBox, Padding } from '../../layout';
import { Text } from '../Text';

export interface PCHeaderProps extends HTMLAttributes<HTMLDivElement> {
  rightElement: ReactNode;
  title?: string;
}

export const Header = ({ rightElement, title }: PCHeaderProps) => {
  return (
    <Wrapper align={'center'}>
      <Padding size={[0, 56, 0, 24]} fill>
        <FlexBox justify={'space-between'} align={'center'}>
          <LogoMock />
          {rightElement}
        </FlexBox>
      </Padding>
      {title && (
        <Text
          typo="Text_18_SB"
          color="black"
          css={css`
            position: absolute;
            left: 290px;
          `}
        >
          {title}
        </Text>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  height: 72px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray_200};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
`;

const LogoMock = styled.div`
  width: 80px;
  height: 36px;
  background-color: gray;
`;
