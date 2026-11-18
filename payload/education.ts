import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: '단국대학교',
      subTitle: '학사 / Engineering Mechanics',
      startedAt: '2019-02',
      endedAt: '2026-02',
    },
    {
      title: '단국대학교 vPRISM Lab',
      subTitle: '학부연구생(연구 인턴) — AI Robot Vision 연구실, ROS 및 SLAM 연구',
      startedAt: '2024-05',
      endedAt: '2024-12',
    },
    {
      title: '단국대학교 MTCL Lab',
      subTitle: '학부연구생(연구 인턴) — Manufacturing Technology & Control 연구실, 5축 CNC 공구 경로 보간 및 HMI 연구',
      startedAt: '2023-03',
      endedAt: '2023-07',
    },
  ],
};

export default education;
