import getProgramDetailTest, { getProgramDetailInstance } from './talent_management/dashboardApi/tests/getProgramDetail.js'


import { group } from 'k6';
import options from './globalOptions.js';

export { options };

const allTestsObjects = [
  { test: getProgramDetailTest, instance: getProgramDetailInstance }
];

export default () => {
  allTestsObjects.forEach(testObject => {
    if (
      __ENV.PROJECT &&
      testObject.instance.projects &&
      testObject.instance.projects.includes(__ENV.PROJECT.toUpperCase())
    )
      group(testObject.instance.API_NAME, () => {
        testObject.test();
      });
  });
};