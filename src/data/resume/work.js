/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bloomberg Center for Government Excellence, GovEx',
    position: 'Data Consultant',
    url: 'https://govex.jhu.edu/',
    startDate: '2023-06-12',
    summary: 'GovEx helps governments use data and AI creatively and effectively to improve the lives of residents across the United States and around the globe.',
    highlights: [
      'Led the data integration and processing for a city-wide dashboard visualizing socioeconomic indicators for 100 U.S. cities, ensuring accurate and timely reporting.',
      'Co-led an initiative to monitor and track federal dataset removals under the new U.S. administration, leveraging APIs, Python, and GitHub Actions for automated detection and reporting.',
      'Built scalable ETL pipelines processing 6M+ observations from 12 data sources, achieving 80% faster processing speeds through parallel computing (Python, SQL).',
      'Optimized PostgreSQL export processes, reducing runtime by 75% with incremental updates, enabling faster and more efficient data transfers.',
      'Implemented rigorous data validation protocols, reducing errors by 70%, ensuring data integrity and reliability for visualization and reporting.',
    ],
  },
  {
    name: 'The Coleridge Initiative, Inc',
    position: 'Associate Research Scientist',
    url: 'https://coleridgeinitiative.org/',
    startDate: '2021-07-22',
    endDate: '2024-06-09',
    summary: `The Coleridge Initiative is a nonprofit that supports governments in leveraging data for informed decision-making. 
    It provides the Administrative Data Research Facility (ADRF), a secure, FedRAMP-authorized platform for linking confidential data across agencies. 
    Through its Applied Data Analytics (ADA) training, it equips state and federal staff with modern data skills, enabling them to analyze their own data and develop open-source tools for long-term impact.`,
    highlights: [
      '',
    ],
  },
  {
    name: 'Energy Policy Institute, University of Chicago, EPIC',
    position: 'Bartlett Fellow',
    url: '',
    startDate: '2017-04-01',
    summary: `hello
    `,
    highlights: [
      '',
    ],
  },
  {
    name: 'Center for Health and Social Sciences, CheSS',
    position: 'Part-time Data Assistant',
    url: '',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    summary: `
    `,
    highlights: [
      '',
    ],
  },
  {
    name: 'Center for Economic Research Pakistan (CERP)',
    position: 'Research Assistant',
    url: '',
    startDate: '',
    endDate: '',
    summary: `
    `,
    highlights: [
      '',
    ],
  },
];

export default work;
