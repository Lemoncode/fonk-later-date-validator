import { setErrorMessage, validator } from './validator';

describe('fonk-later-date-validator specs', () => {
  it('should return succeeded validation when value is a valid Date object later than actual Date', () => {
    const value = new Date(2020, 11, 24, 10, 33, 30, 0);
    const date = new Date();

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object later than customArgs date param', () => {
    const value = new Date(2019, 11, 24, 10, 33, 30, 0);
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object later than customArgs date param by one second', () => {
    const value = new Date(2019, 11, 24, 10, 33, 30, 1);
    const date = new Date(2018, 11, 24, 10, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object with year later than customArgs date param', () => {
    const value = new Date(2019);
    const date = new Date(2018);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object with year and month later than customArgs date param', () => {
    const value = new Date(2018, 11);
    const date = new Date(2018, 10);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month and days later than customArgs date param', () => {
    const value = new Date(2018, 11, 23);
    const date = new Date(2018, 11, 5);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month, days and hours later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 18);
    const date = new Date(2018, 11, 30, 6);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month, days, hours and minutes later than customArgs date param', () => {
    const value = new Date(2018, 11, 24, 10, 45);
    const date = new Date(2018, 11, 24, 10, 23);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object year, month, days, hours, minutes and seconds later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 15, 33, 50);
    const date = new Date(2018, 11, 30, 15, 33, 40);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when value is a valid Date object year, month, days, hours, minutes, seconds and milliseconds later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 15, 33, 45, 18);
    const date = new Date(2018, 11, 30, 15, 33, 45, 7);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object later than customArgs date param', () => {
    const date = new Date('December 24, 2018 10:33:00');
    const value = new Date(2018, 2, 24, 10, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object with year earlier than customArgs date param', () => {
    const date = new Date(2019);
    const value = new Date(2018);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object with year and month earlier than customArgs date param', () => {
    const date = new Date(2018, 2);
    const value = new Date(2018, 1);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object with year, month and days earlier than customArgs date param', () => {
    const date = new Date(2018, 11, 21);
    const value = new Date(2018, 11, 10);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object with year, month, days and hours earlier than customArgs date param', () => {
    const date = new Date(2018, 11, 30, 21);
    const value = new Date(2018, 11, 30, 15);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object with year, month, days, hours and minutes earlier than customArgs date param', () => {
    const date = new Date(2018, 10, 24, 10, 45);
    const value = new Date(2018, 10, 24, 10, 24);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object year, month, days, hours, minutes and seconds earlier than customArgs date param', () => {
    const date = new Date(2018, 9, 30, 15, 33, 34);
    const value = new Date(2018, 9, 30, 15, 33, 17);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return failed validation when value is a valid Date object year, month, days, hours, minutes, seconds and milliseconds earlier than customArgs date param', () => {
    const date = new Date(2018, 9, 30, 15, 33, 45, 45);
    const value = new Date(2018, 9, 30, 15, 33, 45, 6);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: "Date isn't later than the one provided.",
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when it feeds value equals undefined', () => {
    const value = void 0;
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    const value = null;
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    const value = '';
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'LATER_DATE',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    const value = new Date(2018, 11, 24, 10, 33, 30, 0);
    const message = 'other message';
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, message, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'LATER_DATE',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    const value = new Date(2018, 11, 24, 10, 33, 30, 0);
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);
    setErrorMessage('other message');

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'LATER_DATE',
    });
  });

  describe('CustomParams boundaries', () => {
    it('Should throw an error if customArgs are not provided', () => {
      const value = new Date(2018, 11, 24, 10, 33, 30, 0);
      const validatorArgs = { value };

      expect(() => validator(validatorArgs)).toThrow(Error);
      expect(() => validator(validatorArgs)).toThrowError(
        'FieldValidationError: date option for date validation is mandatory. Example: { date: new Date() }.'
      );
    });
  });
});
