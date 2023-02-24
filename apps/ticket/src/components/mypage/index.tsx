import {
  Divider,
  ListHeader,
  NavBar,
  Padding,
  Profile,
  Spacing,
} from '@dudoong/ui';
import DDHead from '@components/shared/Layout/NextHead';
import { useInfiniteQueries } from '@dudoong/utils';

import { authState } from '@store/auth';
import { useRecoilValue } from 'recoil';

import OrderItem from './OrderItem';
import { OrderListResponse } from '@lib/apis/order/orderType';
import { OrderApi } from '@lib/apis/order/OrderApi';
import Shortcuts from '@components/shared/Shortcuts';
import Main from '@components/shared/Layout/Main';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const Mypage = () => {
  const { userProfile } = useRecoilValue(authState);
  const router = useRouter();

  const { data } = useQuery(['recentOrderDetail'], () =>
    OrderApi.GET_RECENT_ORDER(),
  );

  return (
    <Main>
      <DDHead title="두둥! | 마이페이지" />
      <NavBar backHandler={() => router.back()} />
      <ListHeader title={'마이페이지'} size={'listHeader_28'} />
      <Padding size={[20, 24]}>
        <Profile
          size="big"
          image={userProfile?.profileImage}
          name={userProfile?.name || ''}
          subText={'010-7554-6670'}
        />
      </Padding>
      <Divider />
      <Spacing size={20} />
      <Padding size={[10, 24, 10, 24]}>
        {data ? <OrderItem {...data} /> : <></>}
      </Padding>
      <ListHeader title={'바로가기'} size={'listHeader_20'} />

      <Shortcuts text="내 예매내역" url="/history" />
      <Shortcuts text="내 쿠폰함" url="/" />
      <Divider />
      <Shortcuts text="공연 시작하기" url="/" />
      <Divider />
      <Shortcuts text="로그아웃" url="/" />
      <Divider />
      <Shortcuts text="회원탈퇴" textColor="red_300" url="/" />
      <Spacing size={234} />
    </Main>
  );
};

export default Mypage;
