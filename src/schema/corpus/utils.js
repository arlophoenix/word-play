/* @flow */

// eslint-disable-next-line import/prefer-default-export
export function lexSort(letters: string) {
  return letters
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
