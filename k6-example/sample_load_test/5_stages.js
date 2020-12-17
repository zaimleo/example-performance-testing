import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    thresholds: {
        "http_req_duration": ["p(95)<500"],
        "http_req_duration{staticAsset:yes}": ["p(95)<100"],
        "check_failure_rate": ["rate<0.3"]
    },
    stages: [
        { target: 10, duration: "10s" },
        { target: 20, duration: "10s" },
        { target: 30, duration: "10s" },
        { target: 100, duration: "10s" }
    ]
};

export default function () {
  let result = http.get('http://test.k6.io');

  check (result, {
      "Status is 200" : (r) => r.status ==200,
      "Duration < 500ms" : (r) => r.timings.duration < 500,
  });

  sleep(1);
}