const COLORS = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
} as const;

type Color = keyof typeof COLORS;

export function decodedResistorValue(colors: Color[]): string {
  let n = Number(`${COLORS[colors[0]]}${COLORS[colors[1]]}`) * Math.pow(10, COLORS[colors[2]]);
  let prefix = '';

  if (n >= 1_000_000_000) {
    prefix = 'giga';
    n /= 1_000_000_000;
  } else if (n >= 1_000_000) {
    prefix = 'mega';
    n /= 1_000_000;
  } else if (n >= 1_000) {
    prefix = 'kilo';
    n /= 1_000;
  }

  return `${n} ${prefix}ohms`;
}
