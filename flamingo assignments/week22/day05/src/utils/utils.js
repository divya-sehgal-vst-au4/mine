export function createArr(value) {
  const arr = [];
  for (let i = 1; i <= value; i += 1) {
    arr.push(i);
  }
  return arr;
}

export const calcHrs = (from, to) => {
  const fromTime = from.includes('pm') && parseInt(from, 10) !== 12 ? parseInt(from, 10) + 12 : parseInt(from, 10);
  const toTime = to.includes('pm') && parseInt(to, 10) !== 12 ? parseInt(to, 10) + 12 : parseInt(to, 10);
  return toTime - fromTime;
};
