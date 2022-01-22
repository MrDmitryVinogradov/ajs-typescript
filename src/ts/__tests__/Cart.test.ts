import Cart from '../service/Cart';

import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('should add movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Борат', 'Borat', 'USA', 'Nice!', 'Comedy', 'S.B.Cohen', 120, 10.99);
  cart.add(movie);
  expect(cart.items.length).toBe(1)
});

test('should calculate sum', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Борат', 'Borat', 'USA', 'Nice!', 'Comedy', 'S.B.Cohen', 120, 10.99);
  cart.add(movie);
  expect(cart.sum()).toBe(10.99)
});

test('should calculate sum w discount', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Борат', 'Borat', 'USA', 'Nice!', 'Comedy', 'S.B.Cohen', 120, 10);
  cart.add(movie);
  expect(cart.reducedSum(10)).toBe(9)
});

test('should remove item', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Борат', 'Borat', 'USA', 'Nice!', 'Comedy', 'S.B.Cohen', 120, 10);
  const movie2 = new Movie(2, 'Титаник', 'Titanic', 'USA', 'Long live Leo!', 'drama', 'J. Cameron', 180, 10.99)
  cart.add(movie1);
  cart.add(movie2);
  cart.removeItem(1);
  expect(cart.items.length).toBe(1);
});