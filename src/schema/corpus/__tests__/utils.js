/* eslint-env jest */

import { lexSort } from '../utils';

test('lexSort()', () => {
  expect(lexSort('Arlo')).toMatchSnapshot();
  expect(lexSort("what's")).toMatchSnapshot();
});
