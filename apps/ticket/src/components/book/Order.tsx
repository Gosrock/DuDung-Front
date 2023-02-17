import Main from '@components/shared/Layout/Main';
import {
  Button,
  ButtonSet,
  Divider,
  FlexBox,
  Footer,
  ListHeader,
  NavBar,
  Spacing,
  SyncLoader,
  Text,
  theme,
} from '@dudoong/ui';
import { CartApi } from '@lib/apis/cart/CartApi';
import type { AddCartResponse } from '@lib/apis/cart/cartType';
import DDHead from '@components/shared/Layout/NextHead';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import BookHeader from './blocks/order/BookHeader';
import { setSsrAxiosHeader } from '@lib/utils/setSsrAxiosHeader';
import CouponSelect from './blocks/order/CouponSelect';
import Totalprice from './blocks/order/TotalPrice';
import ItemPreview from './blocks/order/ItemPreview';
import useOrderMutation from './blocks/order/useOrderMutation';
import useTossPayments from './blocks/order/useTossPayments';
import Info from './blocks/order/Info';
import { css } from '@emotion/react';

const Order = ({ data }: { data: AddCartResponse }) => {
  const router = useRouter();
  const { instance } = useTossPayments(data.totalPrice);
  const { orderMutate } = useOrderMutation(instance);
  const skipSelectOption = data.items[0].answers.length === 0;

  const handleNavBarButton = () => {
    // 옵션 선택이 생략되었을땐 바로 상세페이지로 뒤로가기
    return skipSelectOption
      ? router.replace(`/events/${router.query.eventId}`)
      : router.back();
  };

  return (
    <>
      <DDHead title="두둥!" />
      <Main>
        <NavBar backHandler={handleNavBarButton} />
        {/* 헤더 */}
        <BookHeader
          title="결제하기"
          description={['고스락 제 23회 정기공연', '일반티켓', 3]}
        />
        <Divider />
        {/* 티켓옵션 프리뷰 */}
        <ListHeader size="listHeader_18" title={'내 티켓 확인하기'} />
        {data.items.map((item, i) => (
          <ItemPreview item={item} key={`${item.name}-${i}`} />
        ))}
        <Divider />
        {/* 할인 쿠폰 TODO : 토스페이먼트 메소드에서 적용하기 */}
        <ListHeader size="listHeader_18" title={'할인 쿠폰 선택하기'} />
        <CouponSelect />
        <Divider />
        {/* 결제금액 */}
        <ListHeader size="listHeader_18" title={'결제금액'} />
        <Totalprice price={data.totalPrice} />
        {/* 결제정보 */}
        {data.totalPrice !== '0원' && (
          <>
            <Divider />
            <ListHeader size="listHeader_18" title={'결제정보'} />
            {instance ? (
              <>
                <div id="payment-method" />
                <div id="agreement" />
              </>
            ) : (
              <FlexBox align={'center'} css={{ marginTop: '30px' }}>
                <SyncLoader />
              </FlexBox>
            )}
          </>
        )}
        {/* 판매정보 */}
        <Divider />
        <div
          css={css`
            background-color: ${theme.palette.gray_100};
            & > div:first-of-type > div > div > span {
              color: ${theme.palette.gray_400} !important;
            }
          `}
        >
          <ListHeader size="listHeader_18" title={'판매정보'} />
          <Info />
          <Spacing size={60} />
        </div>

        {/* 다음으로 버튼 */}
        <ButtonSet bottomFixed backGradient varient="vertical">
          <Text typo="P_Text_12_R" color="gray_500">
            위 내용을 확인하였으며 결제에 동의합니다.
          </Text>
          <Button
            fullWidth
            onClick={() => {
              orderMutate({ couponId: null, cartId: data.cartId });
            }}
          >
            {data.totalPrice} 결제하기
          </Button>
        </ButtonSet>

        <section>
          <Footer />
        </section>
        <Spacing size={120} color={'gray_200'} />
      </Main>
    </>
  );
};

export default Order;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { state, eventId } = context.query;
  const { cookies } = context.req;

  if (!state) {
    try {
      setSsrAxiosHeader(cookies);
      const data = await CartApi.RECENT_CARTLINE();
      if (data) return { props: { data } };
      else return { redirect: { destination: '/', permanent: false } };
    } catch (err: any) {
      //TODO : 로그인 후 리다이렉트 url QA때 토큰 이리저리 해보면서 확인
      const redirectUrl = `events/${eventId}`;
      return {
        redirect: {
          destination: `/login/expired?redirect=${redirectUrl}`,
          permanent: false,
        },
      };
    }
  } else {
    const data = JSON.parse(state as string) as AddCartResponse;
    return { props: { data } };
  }
};
