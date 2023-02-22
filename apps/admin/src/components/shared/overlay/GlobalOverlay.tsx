import { Modal } from '@dudoong/ui';
import useGlobalOverlay from '@lib/hooks/useGlobalOverlay';
import { overlayState } from '@store/globalOverlay';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import Approve from './content/Approve';
import DeleteEvent from './content/DeleteEvent';
import Invitation from './content/Invitation';
import PaidTicket from './content/PaidTicket';
import Pay from './content/Pay';
import PostEvent from './content/PostEvent';
import Register from './content/Register';
import SaveTicket from './content/SaveTicket';

export type GlobalSheetContentKey =
  | 'register'
  | 'deleteEvent'
  | 'postEvent'
  | 'pay'
  | 'paidTicket'
  | 'approve'
  | 'saveTicket'
  | 'invitation';

export type GlobalSheetContentType = {
  [key in GlobalSheetContentKey]: ReactNode;
};

const globalSheetContent = {
  register: Register,
  deleteEvent: DeleteEvent,
  postEvent: PostEvent,
  pay: Pay,
  paidTicket: PaidTicket,
  approve: Approve,
  saveTicket: SaveTicket,
  invitation: Invitation,
};

const GlobalOverlay = () => {
  const overlay = useRecoilValue(overlayState);
  const { isOpen, closeOverlay } = useGlobalOverlay();

  if (!overlay) {
    return null;
  } else {
    const Content = globalSheetContent[overlay.content];
    return (
      <Modal open={isOpen} onDismiss={closeOverlay}>
        <Content {...overlay.props} closeOverlay={closeOverlay} />
      </Modal>
    );
  }
};

export default GlobalOverlay;
