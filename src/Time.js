class Time {
  constructor() {
    this.second = 1000
    this.minute = (60 * this.second)
    this.hour = (60 * this.minute)
    this.day = (24 * this.hour)
    this.month = (30* this.day)
    this.year = (365* this.day)

    this.ascendingUnitsAndNames = [
      [this.second, 'second'],
      [this.minute, 'minute'],
      [this.hour, 'hour'],
      [this.day, 'day'],
      [this.month, 'month'],
      [this.year, 'year']
    ]

    this.ascendingUnits = this.ascendingUnitsAndNames.map(unit => unit[0])
    this.ascendingNames = this.ascendingUnitsAndNames.map(unit => unit[1])
  }

  advanceDateBy(distance, date = new Date() ) {
    return new Date(date.getTime() + distance)
  }

  unitsBetween(distance, date1, date2 = new Date()) {
    let mSeconds = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(mSeconds / distance);
  }

  isBetween(beg, test, end) {
    return beg.getTime() <= test.getTime() && test.getTime() <= end.getTime();
  }

  isBefore(test, reference) {
    return test.getTime() < reference.getTime();
  }

  isAfter(test, reference) {
    return test.getTime() > reference.getTime();
  }

  createYYYYMMDD(date) {
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    while(year.length < 4) year = `0${year}`;
    while(month.length < 2) month = `0${month}`;
    while(day.length < 2) day = `0${day}`;
    return [year, month, day].join('/');
  }

  getRelativeDistance(date1, date2 = new Date()) {
    let mSeconds = Math.abs(date1.getTime() - date2.getTime());
    for (let i = 0; i < this.ascendingUnits.length; i++) {
      let limit = this.ascendingUnits[i + 1]
      let unit = this.ascendingUnits[i];
      let name = this.ascendingNames[i];
      if(mSeconds < limit) {
        let amount = this.getApproximate(unit, mSeconds);
        return `${amount} ${name}${amount === 1 ? '' : 's'}`;
      }
    }
    return `${this.getApproximate(this.year, mSeconds)} years`;
  }

  getApproximate(unit, distance) {
    return Math.floor(distance / unit);
  }
}

let time = new Time();
export default time;
