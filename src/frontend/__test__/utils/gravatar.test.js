import gravatar from '../../utils/gravatar';

test('Gravatar function', () => {
  const email = 'hectorhsandovalm@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/0470954b1c5dcef00cbde72cb463e8e3';
  expect(gravatarUrl).toEqual(gravatar(email));
});