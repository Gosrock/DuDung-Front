import FeaturePCImage from '@assets/landing-renewal/feature-pc.svg';
import { FlexBox, Spacing } from '@dudoong/ui';

export const FeaturePC = () => {
  return (
    <FlexBox direction={'column'}>
      <FeaturePCImage />
      <Spacing size={180} />
    </FlexBox>
  );
};
