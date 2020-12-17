import { group } from 'k6';

import options from '../../globalOptions.js'
import getProgramDetail from '../dashboardApi/tests/getProgramDetail.js'


export { options }

export default () => {
  group('Dashboard API Test', () => {
    getProgramDetail();
  });
};