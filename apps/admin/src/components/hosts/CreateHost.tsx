import BorderBox from '@components/shared/layout/BorderBox';
import { ListHeader, Input, Spacing, Button, FlexBox } from '@dudoong/ui';
import { useMutation } from '@tanstack/react-query';
import { CreateHostRequest } from '@lib/apis/host/hostType';
import { HostContactDes, HostDescription } from './HostDescription';
import { useNavigate } from 'react-router-dom';
import { useInputs } from '@dudoong/utils';
import HostApi from '@lib/apis/host/HostApi';
import { css } from '@emotion/react';

const CreateHost = () => {
  const navigate = useNavigate();

  const [form, onChange] = useInputs<CreateHostRequest>({
    name: '',
    contactEmail: '',
    contactNumber: '',
  });

  const { mutate } = useMutation(HostApi.ADD_HOSTS, {
    onSuccess: (data) => {
      const curId = data.hostId;
      navigate(`/hosts/${curId}/info`);
    },
    onError: () => {
      console.log('error');
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(form);
    mutate(form);
  };

  return (
    <>
      <BorderBox padding={[36, 60, 36, 60]}>
        {/* <ListHeader
          title={'호스트를 새로 만들어볼까요?'}
          size={'listHeader_24'}
          description={<HostDescription />}
          padding={[32, 0, 16, 0]}
        ></ListHeader> */}
        <ListHeader
          title={'호스트 이름'}
          size={'listHeader_18'}
          description={
            '한번 입력되면 수정하기 어려우니, 밴드의 이름을 정확하게 입력해주세요!'
          }
          descColor={'red_300'}
          padding={[32, 0, 12, 0]}
        ></ListHeader>
        <Input name="name" onChange={onChange} />
        <ListHeader
          title={'호스트 연락처'}
          size={'listHeader_18'}
          description={<HostContactDes />}
          descColor={'red_300'}
          padding={[32, 0, 12, 0]}
        ></ListHeader>
        <FlexBox align={'center'} gap={32}>
          <div
            css={css`
              width: 100%;
            `}
          >
            <ListHeader
              title={'대표 전화번호'}
              size={'listHeader_18'}
              padding={[32, 0, 12, 0]}
            ></ListHeader>
            <Input
              type="tel"
              placeholder={'010-XXXX-XXXX'}
              name="contactNumber"
              onChange={onChange}
            />
          </div>
          <div
            css={css`
              width: 100%;
            `}
          >
            <ListHeader
              title={'대표 이메일'}
              size={'listHeader_18'}
              padding={[32, 0, 12, 0]}
            ></ListHeader>
            <Input
              placeholder={'ex)email@aaa.bbb'}
              name="contactEmail"
              onChange={onChange}
            />
          </div>
        </FlexBox>
      </BorderBox>
      <Spacing size={100} />
      <Button varient="primary" fullWidth={true} onClick={handleSubmit}>
        다음
      </Button>
    </>
  );
};
export default CreateHost;