import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

import globalChecks from './globalChecks.js';

export default class BaseTest {
  constructor(TEST_NAME) {
    this.TEST_NAME = TEST_NAME;
    this.threshold = { [this.TEST_NAME]: ['rate>0.7'] };
    // this.thresholdMeasure = new Rate(this.TEST_NAME);
    // this.threshold = { "http_req_duration": ["p(95)<500"]}; // 95% of requests must complete below 0.5s
    // this.thresholdMeasure = new Rate(this.TEST_NAME);
  }

  check(response) {
    check(
      response,
      Object.assign(
        {},
        globalChecks.okStatus,
        globalChecks.globalPerformance,
        // globalChecks.latestPerformance(this.LATEST_PERFORMANCE, response, this.thresholdMeasure)
      )
    );
  }
}
