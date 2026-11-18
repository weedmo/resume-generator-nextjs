import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Tommoro Robotics',
      position: 'Data Engineer · 데이터팀 팀장 (2026.10 ~ 현재)',
      startedAt: '2025-11',
      descriptions: [
        {
          projectName: '',
          projectDetail: [
            '<b>베트남 Data Foundry 구축·운영 총괄 — 수천 시간 규모의 로봇 학습 데이터 수집</b> (상세는 PROJECT 참고)',
            '<b>클라우드 학습 데이터 처리·학습 환경 구축 및 Hugging Face 연동</b> — 수집 데이터를 클라우드에서 바로 처리·학습할 수 있도록 구성 (2026.09 ~ 현재)',
            '<b>로봇 모델 학습용 대규모 데이터셋 구축</b> (2026.11 ~ 현재)',
            '운영 및 관리 프로세스 체계화',
          ],
        },
      ],
    },
    {
      title: 'ALCHERA',
      position: 'VLA Data Factory Supervisor (계약직)',
      startedAt: '2025-07',
      endedAt: '2025-10',
      descriptions: [
        {
          projectName: 'VLA 학습용 로봇 팔 조작 데이터베이스 구축 — 수십 명 규모 수집 현장',
          projectDetail: [
            'Episode 관리: 로봇 팔 DB 수집을 위한 Episode 정의 및 상세 설계',
            'S/W 관리: Ubuntu 기반 로봇 팔 조작 코드 오류 대응 및 유지보수',
            'H/W 관리: 로봇 팔 고장 시 정비·수리',
            '작업자 관리: 수집(조작) 작업자 근태 및 업무 범위 관리',
          ],
        },
      ],
    },
  ],
};

export default experience;
