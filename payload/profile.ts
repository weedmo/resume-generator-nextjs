import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  name: {
    title: '한준모',
    small: '(Joonmo Han)',
  },
  contact: [
    {
      title: 'jjoonmo0212@gmail.com',
      link: 'mailto:jjoonmo0212@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/weedmo',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/joonmo-han-476b77344/',
      icon: faLinkedin,
    },
  ],
};

export default profile;
