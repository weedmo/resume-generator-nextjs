import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Hugging Face LeRobot',
      descriptions: [
        {
          content:
            '연결(concat)된 비디오에서 from_timestamp float 누적 드리프트로 FrameTimestampError가 발생하는 버그를 리포트하고, 회귀 테스트를 포함한 수정 PR 제출',
        },
        { content: 'LeRobot 0.7.0 커뮤니티 로드맵(#3832)에 작업 항목으로 채택 (2026.09)' },
        {
          content: 'Issue #3177',
          href: 'https://github.com/huggingface/lerobot/issues/3177',
        },
        {
          content: 'PR #3179',
          href: 'https://github.com/huggingface/lerobot/pull/3179',
        },
      ],
    },
  ],
};

export default openSource;
