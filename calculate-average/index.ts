export const getAverage = (list: number[]): number => {
  return list.reduce((acc, curr) => acc + curr, 0) / list.length
}
