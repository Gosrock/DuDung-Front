import { Button } from '@dudoong/ui';
import useGlobalOverlay from '@lib/hooks/useGlobalOverlay';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const { openOverlay } = useGlobalOverlay();
  const openOverlayLoginTest = () => {
    openOverlay({ content: 'register' });
  };
  return (
    <>
      <Button onClick={() => navigate('/')}>어드민 랜딩</Button>
      <Button onClick={() => navigate('/events/1/dashboard')}>
        어드민 events dashboard
      </Button>
      <Button onClick={() => navigate('/events/1/detail')}>
        어드민 events detail
      </Button>
      <Button onClick={() => navigate('/events/1/guests')}>
        어드민 events guests
      </Button>
      <Button onClick={() => navigate('/events/1/info')}>
        어드민 events info
      </Button>
      <Button onClick={() => navigate('/events/1/options')}>
        어드민 events options
      </Button>
      <Button onClick={() => navigate('/events/1/qr')}>어드민 events qr</Button>
      <Button onClick={() => navigate('/events/1/tickets')}>
        어드민 events tickets
      </Button>
      <Button onClick={() => navigate('/hosts/1/dashboard')}>
        어드민 hosts dashboard
      </Button>
      <Button onClick={() => navigate('/hosts/1/info')}>
        어드민 hosts info
      </Button>
      <Button onClick={() => navigate('/hosts/1/member')}>
        어드민 hosts member
      </Button>
      <Button onClick={() => navigate('/hosts/1/slack')}>
        어드민 hosts slack
      </Button>

      <Button onClick={() => openOverlayLoginTest()}>
        overlay register test
      </Button>
      <Button onClick={() => navigate('/login')}>login</Button>
    </>
  );
};
export default Landing;