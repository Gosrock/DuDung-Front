import TempTButtonSet from '@components/events/tickets/tickets/TempTButtonSet';
import TicketList from '@components/events/tickets/tickets/TicketList';
import { FlexBox, ListHeader, Spacing, Text } from '@dudoong/ui';
import TicketApi from '@lib/apis/ticket/TicketAPI';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const Tickets = () => {
  const { pathname } = useLocation();
  const eventId = pathname.split('/')[2];

  const { data } = useQuery(['ticketDetail'], () =>
    TicketApi.GET_TICKET_DETAIL(eventId),
  );

  return (
    <>
      <Spacing size={32} />
      <ListHeader
        padding={0}
        size="listHeader_24"
        title="티켓 관리"
        description={
          <FlexBox direction="column" align="flex-start">
            <Text typo="P_Text_16_M" color="gray_400">
              관객들을 위한 티켓을 만들어주세요. 최소 한개의 티켓이 필요해요.
            </Text>
            <Text typo="P_Text_16_M" color="gray_400">
              공연 등록 이후에 해당 티켓으로 예매한 사람이 있다면 삭제할 수
              없어요.
            </Text>
          </FlexBox>
        }
      />
      <Spacing size={36} />
      <TempTButtonSet />
      <Spacing size={72} />
      <ListHeader padding={0} size="listHeader_18" title="티켓 목록" />
      <Spacing size={42} />
      <TicketList ticketItems={data ? data.ticketItems : null} />
    </>
  );
};
export default Tickets;
