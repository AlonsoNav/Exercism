//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const daysOfWeek = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6
}

export const meetup = (year, month, week, day) => {
  let date = new Date(year, month - 1, 1);
  let daysToAdd = daysOfWeek[day] - date.getDay();
  if(daysToAdd < 0)
    daysToAdd += 7;
  date.setDate(date.getDate() + daysToAdd);
  switch(week) {
    case 'first':
      return date;
    case 'second':
      date.setDate(date.getDate() + 7);
      return date;
    case 'third':
      date.setDate(date.getDate() + 14);
      return date;
    case 'fourth':
      date.setDate(date.getDate() + 21);
      return date;
    case 'last':
      date = new Date(year, month, 0);
      let daysToSub = date.getDay() - daysOfWeek[day];
      if(daysToSub < 0)
        daysToSub += 7;
      date.setDate(date.getDate() - daysToSub);
      return date;
    case 'teenth':
      date.setDate(date.getDate() + 7);
      if(date.getDate() <= 12)
        date.setDate(date.getDate() + 7);
      return date;
  }
};
