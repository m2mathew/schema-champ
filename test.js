import test from "ava";

import sayGreeting from './src/main';

test('validate', t => {
  t.pass();
});

test('sayGreeting', t => {
  const saidGreeting = sayGreeting();

  t.is(saidGreeting, 'hello, world!');
});
