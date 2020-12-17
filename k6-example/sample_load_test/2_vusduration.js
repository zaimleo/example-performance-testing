import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 5,
    duration: "10s"
};

export default function () {
  let result = http.get('http://test.k6.io');
  sleep(1); //seconds
}