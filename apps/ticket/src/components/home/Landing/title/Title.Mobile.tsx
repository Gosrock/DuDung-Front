import { Spacing, Text, theme } from '@dudoong/ui';
import { css } from '@emotion/react';
import Logo from '@assets/landing-renewal/title-logo.svg';
import TitleIllustMobile from '@assets/landing-renewal/title-illust-mobile.svg';
import { backgroundBlackStyle } from '../backgroundBlackStyle';

export const TitleMobile = () => {
  return (
    <div css={backgroundBlackStyle}>
      <div
        css={css({
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 72,
          backgroundColor: theme.palette.black,
        })}
      />
      <Spacing size={24} />
      <Logo css={css({ marginLeft: 24, width: 231 })} />
      <Spacing size={22} />
      <div css={css({ marginLeft: 24 })}>
        <Text typo={'G_Text_22_M'} color={'white'}>
          BAND CONCERT
          <br />
          PLATFORM
        </Text>
      </div>
      <TitleIllustMobile />
    </div>
  );
};
