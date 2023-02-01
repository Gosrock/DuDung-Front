import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminNoMenuLayout = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <BottomWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default AdminNoMenuLayout;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.gray_100};
`;

const BottomWrapper = styled.div`
  padding-top: 64px;
  width: 100%;
`;

const OutletWrapper = styled.div`
  width: 876px;
  margin: 0 auto;
`;
