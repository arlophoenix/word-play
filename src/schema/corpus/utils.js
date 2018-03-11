/* @flow */

// eslint-disable-next-line import/prefer-default-export
export function lexSort(letters: string) {
  const normalized = letters.toLowerCase().replace(/[^a-z]/g, '');
  return normalized
    .split('')
    .sort()
    .join('');
}
