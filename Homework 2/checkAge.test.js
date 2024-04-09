// checkAge.test.js
const isAdult = require('./checkAge');

test('Sprawdza czy osoba o wieku 20 lat jest pełnoletnia', () => {
  expect(isAdult(20)).toBe(true);
});

test('Sprawdza czy osoba o wieku 16 lat jest pełnoletnia', () => {
  expect(isAdult(16)).toBe(false);
});

test('Sprawdza czy osoba o wieku 18 lat jest pełnoletnia', () => {
  expect(isAdult(18)).toBe(true);
});