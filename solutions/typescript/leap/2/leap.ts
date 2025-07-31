export function isLeap(year: number): boolean {
  if (year % 100 === 0) 
    return year % 4 === 0 && year % 400 === 0;
  else 
    return year % 4 === 0;
}
