export const getAverage = (list: number[]): number =>
  list.reduce((acc, curr) => acc + curr, 0) / list.length
