import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 5,
    duration: "10s"
};

export default function () {
  let result = http.get('http://test.k6.io');

  check (result, {
      "Status is 200": (r) => r.status ==200,
      "Duration < 1000ms": (r) => r.timings.duration < 1000,
  });

  sleep(1);
}