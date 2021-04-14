export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]): number => {
  let count = 0
  for (const isSheep of arrayOfSheep) {
    if (isSheep) {
      count += 1
    }
  }
  return count
}
