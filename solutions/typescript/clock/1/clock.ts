export class Clock {
  public hour: number;
  public minute: number;

  constructor(hour: number, minute: number = 0) {
    hour += Math.floor(minute / 60);
    minute = minute % 60;
    if (minute < 0)
      minute += 60;
    this.minute = minute;
    hour = hour % 24;
    if (hour < 0)
      hour += 24;
    this.hour = hour;
  }

  public toString(): string {
    return `${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
