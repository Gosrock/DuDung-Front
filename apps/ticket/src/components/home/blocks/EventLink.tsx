import { Tag, Text } from '@dudoong/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { EventResponse } from '@lib/apis/events/eventType';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { EventStatus } from '@dudoong/utils';

const EventLink = (props: EventResponse) => {
  return (
    <Link href={`events/${props.eventId}`}>
      <Wrapper>
        <Poster status={props.status}>
          <Image
            src={props.posterImage || ''}
            fill={true}
            alt={`${props.name}`}
            className="poster"
          />
          {props.status === '지난공연' && (
            <Tag size="md" color="mono" text="지난 공연" className="tag" />
          )}
        </Poster>
        <Text
          typo="P_Text_14_R"
          color="gray_400"
          as="p"
          css={css`
            padding-top: 10px;
          `}
        >
          {props.startAt}
        </Text>
        <Text
          typo="P_Header_18_SB"
          color={props.status === '지난공연' ? 'gray_400' : 'black'}
          as="p"
          css={css`
            padding-top: 3px;
          `}
        >
          {props.name}
        </Text>
      </Wrapper>
    </Link>
  );
};

export default React.memo(EventLink);

const Wrapper = styled.div`
  transform: translateY(0px);
  transition: box-shadow 0.15s ease-in 0s, transform 0.15s ease-in 0s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const Poster = styled.div<{ status: EventStatus }>`
  position: relative;
  padding-top: 141.4%;
  overflow: hidden;
  img {
    background: ${({ theme }) => theme.palette.gray_300};

    object-fit: cover;
    ${({ status }) =>
      status === '지난공연' &&
      css`
        filter: brightness(60%);
      `}
  }
  box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.01);
  border-radius: 12px;

  .tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.05);
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
  }
`;
