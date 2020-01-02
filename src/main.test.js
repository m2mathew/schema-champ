import test from "ava";

import {
  sayGreeting,
  validateSchema,
 } from './main';

test('validate', t => {
  const validatedSchema = validateSchema();
  t.pass();
});

test('sayGreeting', t => {
  const saidGreeting = sayGreeting();

  t.is(saidGreeting, '-- Tests Starting --');
});
