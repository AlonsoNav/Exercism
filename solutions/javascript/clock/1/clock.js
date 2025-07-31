//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const formatDate = (hours, minutes) => {
  hours += (minutes / 60) | 0;  // Sum the rest of minutes (when minutes > 60)
  minutes %= 60;
  if(minutes < 0){
    hours--;  // We are substracting minutes from 24 hours
    minutes += 60;
  }
  hours %= 24;
  if(hours < 0)
    hours += 24;
  return [hours, minutes];
}

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.date = formatDate(hours, minutes);
  }

  toString() {
    const formattedHours = this.date[0].toString().padStart(2, '0');
    const formattedMinutes = this.date[1].toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutes) {
    this.date = formatDate(this.date[0], this.date[1] + minutes);
    return this;
  }

  minus(minutes) {
    this.date = formatDate(this.date[0], this.date[1] - minutes);
    return this;
  }

  equals(clockToCompare) {
    return this.date[0] === clockToCompare.date[0] && this.date[1] === clockToCompare.date[1];
  }
}
