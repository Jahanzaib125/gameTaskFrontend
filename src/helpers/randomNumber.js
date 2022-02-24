export function randomNumber(list) {
  const res = [];
  for (let x = 1; x <= 3; x++) {
    const random = Math.floor(Math.random() * list.length);
    res.push(list(random));
  }
  return res;
}
export function getRandomNumbers(list, item = 3) {
  return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item);
}
