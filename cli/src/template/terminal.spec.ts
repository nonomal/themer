import test from 'ava';
import { toData } from './terminal.js';

test('toData', (t) => {
  t.is(
    toData('#ff0000'),
    'YnBsaXN0MDDUAQIDBAUGFRZYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKMHCA9VJG51bGzTCQoLDA0OVU5TUkdCXE5TQ29sb3JTcGFjZVYkY2xhc3NPECcxLjAwMDAwMDAwMDAgMC4wMDAwMDAwMDAwIDAuMDAwMDAwMDAwMAAQAYAC0hAREhNaJGNsYXNzbmFtZVgkY2xhc3Nlc1dOU0NvbG9yohIUWE5TT2JqZWN0XxAPTlNLZXllZEFyY2hpdmVy0RcYVHJvb3SAAQgRGiMtMjc7QUhOW2KMjpCVoKmxtL3P0tcAAAAAAAABAQAAAAAAAAAZAAAAAAAAAAAAAAAAAAAA2Q==',
  );
  t.is(
    toData('#282629'),
    'YnBsaXN0MDDUAQIDBAUGFRZYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKMHCA9VJG51bGzTCQoLDA0OVU5TUkdCXE5TQ29sb3JTcGFjZVYkY2xhc3NPECcwLjE1Njg2Mjc0NTEgMC4xNDkwMTk2MDc4IDAuMTYwNzg0MzEzNwAQAYAC0hAREhNaJGNsYXNzbmFtZVgkY2xhc3Nlc1dOU0NvbG9yohIUWE5TT2JqZWN0XxAPTlNLZXllZEFyY2hpdmVy0RcYVHJvb3SAAQgRGiMtMjc7QUhOW2KMjpCVoKmxtL3P0tcAAAAAAAABAQAAAAAAAAAZAAAAAAAAAAAAAAAAAAAA2Q==',
  );
});
