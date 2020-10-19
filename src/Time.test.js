import time from './Time.js';

describe('time', () => {
    let date = new Date(2020, 0, 1);
    let dayAfter = new Date(2020, 0, 2);
    let dayBefore = new Date(2019, 11, 31);

  describe('advanceDateBy()', () => {

    it('should return a Date object corresponding to the Date a given distance away from a reference Date', () => {

      expect(time.advanceDateBy(time.day, date).getTime()).toEqual(dayAfter.getTime());
      expect(time.advanceDateBy(-time.day, date).getTime()).toEqual(dayBefore.getTime());
    });
  });

  describe('unitsBetween()', () => {

    it('should return the number of given units that are between 2 given Dates', () => {

      expect(time.unitsBetween(time.day, dayBefore, date)).toEqual(1);
      expect(time.unitsBetween(time.day, dayBefore, dayAfter)).toEqual(2);
      expect(time.unitsBetween(time.day, date, date)).toEqual(0);

      let oneMinuteAfter = time.advanceDateBy(time.minute, date);

      expect(time.unitsBetween(time.day, date, oneMinuteAfter)).toEqual(0);
      expect(time.unitsBetween(time.hour, date, oneMinuteAfter)).toEqual(0);
      expect(time.unitsBetween(time.minute, date, oneMinuteAfter)).toEqual(1);
      expect(time.unitsBetween(time.second, date, oneMinuteAfter)).toEqual(60);

    });
  });

  describe('isBetween()', () => {

    it('should return `true` if a date falls between 2 dates (inclusive)', () => {

      expect(time.isBetween(dayBefore, date, dayAfter)).toEqual(true);
      expect(time.isBetween(dayBefore, dayBefore, dayAfter)).toEqual(true);
      expect(time.isBetween(dayBefore, dayAfter, dayAfter)).toEqual(true);
    });

    it('should return `false` if a date falls between 2 dates (inclusive)', () => {
      let oneMSBeforeYesterday = new Date( dayBefore.getTime() - 1);
      let oneMSAfterTomorrow = new Date ( dayAfter.getTime() + 1);

      expect(time.isBetween(dayBefore, oneMSBeforeYesterday, dayAfter)).toEqual(false);
      expect(time.isBetween(dayBefore, oneMSAfterTomorrow, dayAfter)).toEqual(false);
    });
  });

  describe('isBefore()', () => {

    it('should return `true` if a Date falls before a reference date', () => {

      expect(time.isBefore(dayBefore, date)).toEqual(true);
      expect(time.isBefore(date, dayAfter)).toEqual(true);
    });

    it('should return `false` if a Date doesn\'t come before it', () => {

      expect(time.isBefore(dayAfter, date)).toEqual(false);
      expect(time.isBefore(date, dayBefore)).toEqual(false);
      expect(time.isBefore(date, date)).toEqual(false);
    });
  });

  describe('isAfter()', () => {

    it('should return `true` if a Date falls after a reference date', () => {

      expect(time.isAfter(date, dayBefore)).toEqual(true);
      expect(time.isAfter(dayAfter, date)).toEqual(true);
    });

    it('should return `false` if a Date doesn\'t come after it', () => {

      expect(time.isAfter(date, dayAfter)).toEqual(false);
      expect(time.isAfter(dayBefore, date)).toEqual(false);
      expect(time.isAfter(date, date)).toEqual(false);
    });
  });

  describe('createYYYYMMDD', () => {

    it('should return a string of the date in `YYYY/MM/DD format`', () => {

      expect(time.createYYYYMMDD(date)).toEqual('2020/01/01')
      expect(time.createYYYYMMDD(dayBefore)).toEqual('2019/12/31');
    });
  });

  describe('getRelativeDistance', () => {

    it('should return a string of roughly the time between two dates', () => {

      expect(time.getRelativeDistance(date, dayAfter)).toEqual('1 day');
      expect(time.getRelativeDistance(dayBefore, dayAfter)).toEqual('2 days');
    })
  });
});
