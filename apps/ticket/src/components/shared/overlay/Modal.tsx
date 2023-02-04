import { RoundBlock } from '@dudoong/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { OverlayBoxProps } from './GlobalOverlay';

const Modal = ({ open, onDismiss, children }: OverlayBoxProps) => {
  return (
    <Wrapper open={open}>
      <Overlay onClick={onDismiss} />
      <RoundBlock
        padding={[16, 0]}
        css={{ zIndex: '10', width: '390px', border: '1px solid black' }}
      >
        {children}
      </RoundBlock>
    </Wrapper>
  );
};
export default Modal;

const Wrapper = styled.div<{ open: boolean }>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: 0.1s forwards fadeIn;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ open }) =>
    !open &&
    css`
      display: none;
    `}
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
`;
