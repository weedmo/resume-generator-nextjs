import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '베트남 Data Foundry 구축·운영',
      where: 'Tommoro Robotics · 프로젝트 총괄',
      startedAt: '2026-04',
      descriptions: [
        {
          content: '개요',
          weight: 'BOLD',
          descriptions: [
            { content: 'UMI 기반 데이터 수집 장비를 활용하는 다중 Cell 규모 로봇 학습 데이터 수집 거점을 베트남에 구축·운영' },
            { content: '파이프라인·인프라·플랫폼·수집 운영까지 데이터 전 주기를 직접 설계·구현' },
            { content: '수천 시간 규모 데이터 수집', weight: 'BOLD' },
          ],
        },
        {
          content: '파이프라인',
          weight: 'BOLD',
          descriptions: [
            { content: 'Ingest → Curation → Conversion → S3 Upload → Clean 5단계 파이프라인 설계' },
            { content: 'Raw 데이터는 MinIO에 적재, 최종 결과물은 LeRobot Dataset으로 변환·업로드' },
            { content: '데이터 상태를 PostgreSQL 단일 정본(single source of truth)으로 관리' },
            {
              content:
                'Grafana·Prometheus·Loki 기반 전 계층(컨테이너·호스트·DB·GPU·네트워크·디스크·파이프라인) 모니터링 구축, 대시보드·알림 설정을 코드로 관리',
            },
          ],
        },
        {
          content: '인프라',
          weight: 'BOLD',
          descriptions: [
            { content: 'MikroTik 스위치·라우터로 현장 네트워크 설계 — 수집·큐레이션 단말은 Cell별 트래픽 버퍼를 두고, 워크스테이션은 고대역폭으로 분리 연결' },
            { content: 'AWS Direct Connect 메인·백업 회선 이중화' },
            { content: '베트남 현지 설치 직접 수행' },
          ],
        },
        {
          content: '운영·플랫폼',
          weight: 'BOLD',
          descriptions: [
            { content: '작업자가 가이드를 정확히 이해하고 스스로 동기를 갖고 수집하도록 KPI 체계, 계층별 작업 가이드, 큐레이션 리뷰 시스템을 기획해 플랫폼으로 구현' },
            { content: '큐레이션 통과 데이터를 월 단위로 안정적으로 생산하는 체계 구축', weight: 'BOLD' },
          ],
        },
        {
          content: 'Tech Stack',
          weight: 'BOLD',
          descriptions: [
            { content: 'Python · PostgreSQL · MinIO · AWS S3 / Direct Connect · LeRobot Dataset · Grafana · Prometheus · Loki · MikroTik' },
          ],
        },
      ],
    },
  ],
};

export default project;
