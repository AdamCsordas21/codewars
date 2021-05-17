export const calculateBMI = (weight: number, height: number): string => {
  const bmi = weight / (height * height)
  if (bmi <= 18.0) { return 'Underweight' }
  if (bmi <= 25.0) { return 'Normal' }
  if (bmi <= 30.0) { return 'Overweight' }
  else { return 'Obese' }
}
