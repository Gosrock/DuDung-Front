import {
  Button,
  ButtonSet,
  ListHeader,
  ListRow,
  Padding,
  RoundBlock,
  TagButton,
} from '@dudoong/ui';
import useToastify from '@dudoong/ui/src/lib/useToastify';
import { AccountInfo } from '@lib/apis/cart/cartType';
import useOrderMutation from './useOrderMutation';

const AccountInfoSection = ({
  accountInfo,
  orderPayload,
}: {
  accountInfo: AccountInfo;
  orderPayload: { couponId: null; cartId: number };
}) => {
  const { dudoongMutate } = useOrderMutation();
  const { setToast } = useToastify();
  const handleDudoongOrder = () => {
    dudoongMutate(orderPayload);
  };
  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountInfo?.accountNumber);
    setToast({ comment: '계좌번호가 복사되었어요!' });
  };

  return (
    <>
      <ListHeader size="listHeader_18" title={'입금 계좌 확인'} />
      <Padding size={[0, 20, 0, 20]}>
        <RoundBlock background="gray_100" padding={0}>
          <ListRow
            text={`${accountInfo.bankName} ${accountInfo.accountNumber}`}
            subText={`(입금자명) ${accountInfo.accountHolder}`}
            textTypo={['P_Text_16_M', 'P_Text_14_M']}
            textColor={['black', 'gray_500']}
            rightElement={
              <TagButton
                text="계좌 복사"
                color="secondary"
                size="md"
                onClick={handleCopyAccount}
              />
            }
            textGap={0}
          />
        </RoundBlock>
      </Padding>
      <ButtonSet varient="horizontal">
        <Button fullWidth varient="tertiary">
          다음에 할래요
        </Button>
        <Button fullWidth onClick={handleDudoongOrder}>
          입금했어요
        </Button>
      </ButtonSet>
    </>
  );
};
export default AccountInfoSection;
