import { ISkill } from '../component/skill/ISkill';

const data: ISkill.Skill = {
  category: 'Data Engineering',
  items: [{ title: 'Robot Data Pipeline 설계' }, { title: 'PostgreSQL' }, { title: 'MinIO / AWS S3' }],
};

const format: ISkill.Skill = {
  category: 'Data Format',
  items: [{ title: 'LeRobot Dataset (주력)' }, { title: 'MCAP' }, { title: 'RLDS · HDF5' }],
};

const infra: ISkill.Skill = {
  category: 'Infra & Observability',
  items: [
    { title: 'Grafana / Prometheus / Loki' },
    { title: '현장 네트워크 구축 (MikroTik)' },
    { title: 'AWS Direct Connect' },
  ],
};

const robotLearning: ISkill.Skill = {
  category: 'Robot Learning',
  items: [
    { title: 'LeRobot' },
    { title: 'VLA Fine-tuning (π0.5, SmolVLA)' },
    { title: 'Imitation Learning (ACT, Diffusion Policy)' },
  ],
};

const simulation: ISkill.Skill = {
  category: 'Simulation',
  items: [{ title: 'NVIDIA Isaac Sim' }, { title: 'MuJoCo' }, { title: 'Gazebo' }],
};

const language: ISkill.Skill = {
  category: 'Language',
  items: [{ title: 'Python' }],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [data, format, infra, robotLearning, simulation, language],
};

export default skill;
