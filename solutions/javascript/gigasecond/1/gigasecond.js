//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (normalDate) => {
  let d = new Date(normalDate)
  d.setSeconds(d.getSeconds() + 1000000000)
  return d
};