import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { isFloat } from './is-float.js';

describe('isFloat', () => {
  test('число является дробным числом', () => {
    assertToBe(isFloat(55.55), true);
    assertToBe(isFloat(1.00001), true);
    assertToBe(isFloat(0.000000000001), true);
    assertToBe(isFloat(0.999999999999), true);
    assertToBe(isFloat(-1.00001), true);
  });
});
