import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 5,
    duration: "10s",
    thresholds: {
        "http_req_duration": [{
            threshold: "p(95) < 100",
            abortOnFail: true
        }],
        "checks": [{
            threshold: "rate>0.3"
        }]
    }
};

export default function () {
  let result = http.get('http://test.k6.io');

  check (result, {
      "Status is 200" : (r) => r.status ==200,
      "Duration < 500ms" : (r) => r.timings.duration < 500,
  });

  sleep(1);
}