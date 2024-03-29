import { setErrorMessage, validator } from './validator';

const VALIDATOR_TYPE = 'LATER_DATE';
const VALIDATOR_MESSAGE = "Date isn't later than the one provided.";

describe('fonk-later-date-validator specs', () => {
  it('should return succeeded validation when value is a valid Date object later than customArgs date param', () => {
    const value = new Date('2019-11-24 10:33:30:000');
    const date = new Date('2018-11-24 15:33:30:000');

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object later than customArgs date param by one second', () => {
    const value = new Date('2019-11-24 10:33:30:001');
    const date = new Date('2019-11-24 10:33:30:000');

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object with year later than customArgs date param', () => {
    const value = new Date(2019);
    const date = new Date(2018);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object with year and month later than customArgs date param', () => {
    const value = new Date(2018, 11);
    const date = new Date(2018, 10);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month and days later than customArgs date param', () => {
    const value = new Date(2018, 11, 23);
    const date = new Date(2018, 11, 5);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month, days and hours later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 18);
    const date = new Date(2018, 11, 30, 6);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object with year, month, days, hours and minutes later than customArgs date param', () => {
    const value = new Date(2018, 11, 24, 10, 45);
    const date = new Date(2018, 11, 24, 10, 23);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object year, month, days, hours, minutes and seconds later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 15, 33, 50);
    const date = new Date(2018, 11, 30, 15, 33, 40);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when value is a valid Date object year, month, days, hours, minutes, seconds and milliseconds later than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 15, 33, 45, 18);
    const date = new Date(2018, 11, 30, 15, 33, 45, 7);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object previous than customArgs date param', () => {
    const value = new Date('2018-02-24 10:33:30:000');
    const date = new Date('2018-12-24 10:33:30:000');

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object with year earlier than customArgs date param', () => {
    const value = new Date(2018);
    const date = new Date(2019);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object with year and month earlier than customArgs date param', () => {
    const value = new Date(2018, 1);
    const date = new Date(2018, 2);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object with year, month and days earlier than customArgs date param', () => {
    const value = new Date(2018, 11, 10);
    const date = new Date(2018, 11, 21);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object with year, month, days and hours earlier than customArgs date param', () => {
    const value = new Date(2018, 11, 30, 15);
    const date = new Date(2018, 11, 30, 21);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object with year, month, days, hours and minutes earlier than customArgs date param', () => {
    const value = new Date(2018, 10, 24, 10, 24);
    const date = new Date(2018, 10, 24, 10, 45);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object year, month, days, hours, minutes and seconds earlier than customArgs date param', () => {
    const value = new Date(2018, 9, 30, 15, 33, 17);
    const date = new Date(2018, 9, 30, 15, 33, 34);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when value is a valid Date object year, month, days, hours, minutes, seconds and milliseconds earlier than customArgs date param', () => {
    const value = new Date(2018, 9, 30, 15, 33, 45, 6);
    const date = new Date(2018, 9, 30, 15, 33, 45, 45);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals undefined', () => {
    const value = void 0;
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    const value = null;
    const date = new Date(2018, 11, 30, 15, 33, 30, 0);

    const result = validator({ value, customArgs: { date } });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    const value = '';
    const customArgs = {
      date: new Date(2018, 11, 30, 15, 33, 30, 0),
      parseStringToDateFn: (value: string) => new Date(value),
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals string with letters and numbers', () => {
    const value = 'test1234';
    const customArgs = {
      date: new Date('2018-11-30T15:30:00'),
      parseStringToDateFn: (value: string) => new Date(value),
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals string with invalid format date', () => {
    const value = '14:00:00 30-11-2018';
    const customArgs = {
      date: new Date('2018-11-30T15:30:00'),
      parseStringToDateFn: (value: string) => new Date(value),
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals string with valid format date and is previous date', () => {
    const value = '2018-11-30 14:00:00';
    const customArgs = {
      date: new Date('2018-11-30T15:30:00'),
      parseStringToDateFn: (value: string) => new Date(value),
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeded validation when it feeds value equals string with valid format date and is later date', () => {
    const value = '2018-11-30 16:00:00';
    const customArgs = {
      date: new Date('2018-11-30T15:30:00'),
      parseStringToDateFn: (value: string) => new Date(value),
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds inclusive equals false, value equals string with valid format date and is same date', () => {
    const value = '2018-11-30 14:00:00';
    const customArgs = {
      date: new Date('2018-11-30T14:00:00'),
      parseStringToDateFn: (value: string) => new Date(value),
      inclusive: false,
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: false,
      message: VALIDATOR_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds inclusive equals true, value equals string with valid format date and is same date', () => {
    const value = '2018-11-30 14:00:00';
    const customArgs = {
      date: new Date('2018-11-30T14:00:00'),
      parseStringToDateFn: (value: string) => new Date(value),
      inclusive: true,
    };

    const result = validator({ value, customArgs });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
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
      type: VALIDATOR_TYPE,
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
      type: VALIDATOR_TYPE,
    });
  });

  describe('CustomParams boundaries', () => {
    it('Should throw an error if customArgs are not provided', () => {
      const value = new Date(2018, 11, 24, 10, 33, 30, 0);
      const validatorArgs = { value };

      expect(() => validator(validatorArgs)).toThrow(Error);
      expect(() => validator(validatorArgs)).toThrowError(
        'FieldValidationError: date custom arg is mandatory. Example: { customArgs: { date: new Date() } }.'
      );
    });

    it('Should throw an error if customArgs.date is not provided', () => {
      const value = new Date(2018, 11, 24, 10, 33, 30, 0);

      expect(() => validator({ value, customArgs: { date: void 0 } })).toThrow(
        Error
      );
      expect(() =>
        validator({ value, customArgs: { date: void 0 } })
      ).toThrowError(
        'FieldValidationError: date custom arg is mandatory. Example: { customArgs: { date: new Date() } }.'
      );
    });

    it('Should throw an error if value is string and customArgs.parseStringToDateFn is not provided', () => {
      const value = '2019-11-06';

      expect(() =>
        validator({
          value,
          customArgs: { date: new Date(), parseStringToDateFn: void 0 },
        })
      ).toThrow(Error);
      expect(() =>
        validator({
          value,
          customArgs: { date: new Date(), parseStringToDateFn: void 0 },
        })
      ).toThrowError(
        'FieldValidationError: parseStringToDateFn custom arg is mandatory when value is string. Example: { customArgs: { parseStringToDateFn: (value) => new Date(value) } }.'
      );
    });
  });
});
