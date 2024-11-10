import { Footer } from '@dudoong/ui';
import DDHead from '@components/shared/Layout/NextHead';
import { css } from '@emotion/react';
import Media from '@components/shared/Media';
import { Title } from './title';
import { Intro } from './intro';
import { Feature } from './feature';
import { Special } from './special';
import { Outro } from './outro';

const Landing = () => {
  return (
    <>
      <DDHead
        title="두둥!"
        additional={
          <>
            <meta property="og:image" content="/og.png" />
          </>
        }
      />
      <main
        css={css`
          overflow-x: hidden;
        `}
      >
        <Media.Mobile>
          <Title.Mobile />
          <Intro.Mobile />
          <Feature.Mobile />
          <Special.Mobile />
          <Outro />
        </Media.Mobile>

        <Media.PC>
          <Title.PC />
          <Intro.PC />
          <Feature.PC />
          <Special.PC />
          <Outro />
        </Media.PC>
      </main>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Landing;
