const suma = require('../index');

test('Este test generará error 2 + 3 = 6', () => {
  expect(suma(2, 3)).toBe(6); // Este test falla
});
