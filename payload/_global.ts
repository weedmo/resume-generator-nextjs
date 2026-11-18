
import { IGlobal } from '../component/common/IGlobal';

const favicon = './favicon.ico';
const previewImage = './preview.jpg';
const title = 'Resume Joonmo Han';
const description = 'Joonmo Han — Robotics Data Engineer';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'Resume Image Preview.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
