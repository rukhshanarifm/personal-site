import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/rukhshanarifm/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    label: 'Number of product/business ideas I am keeping a list of',
    key: 'side_businesses',
    value: '20 (increases day by day)',
  },
];

export default data;
