import { transform } from './transform';
import { subDates } from './transform';
import { daysDiff } from './transform';
import { mockResponseRoundTrip3 } from './mock-roundtrip-from-airpulse';
import { mockTransformedData } from './mock-transformed-data';

describe('search transform function', () => {
  it('should return correct results array', () => {
    const result = transform(mockResponseRoundTrip3().response.model.results);

    const firstResult = Object.assign({}, result[0]);
    firstResult.flights = firstResult.flights.map(x => {
      x.solutions = [x.solutions[0]];
      return x;
    });
    expect(Math.round(firstResult.price * 100)).toBe(Math.round(mockTransformedData[0].price * 100));
    expect(firstResult.flights[0]).toEqual(mockTransformedData[0].flights[0]);
  });
});

describe('date difference in d, h, m', () => {
  it('should return correct difference', () => {
    const dates = [
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 18:00:00 GMT+0000', '1d'],
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 20:00:00 GMT+0000', '1d 2h'],
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 20:10:00 GMT+0000', '1d 2h 10m'],
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 20:00:00 GMT+0000', '2h'],
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 20:10:00 GMT+0000', '2h 10m'],
      ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 18:10:00 GMT+0000', '10m'],
    ];

    for (let d of dates) {
      expect(subDates(d[0], d[1])).toEqual(d[2]);
    }
  });
});

describe('date difference in d, h, m', () => {
    it('should return correct difference', () => {
        const dates = [
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 18:00:00 GMT+0000', '1d'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 20:00:00 GMT+0000', '1d 2h'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 20:10:00 GMT+0000', '1d 2h 10m'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 20:00:00 GMT+0000', '2h'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 20:10:00 GMT+0000', '2h 10m'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 18:10:00 GMT+0000', '10m'],
        ];

        for (let d of dates) {
            expect(subDates(d[0], d[1])).toEqual(d[2]);
        }
    });
});

describe('date difference +/- days', () => {
    it('should return correct difference', () => {
        const dates = [
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/19 18:00:00 GMT+0000', '+1'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/20 20:00:00 GMT+0000', '+2'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/20 16:00:00 GMT+0000', '+2'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/17 20:00:00 GMT+0000', '-1'],
            ['2018/10/18 18:00:00 GMT+0000', '2018/10/18 20:00:00 GMT+0000', null],
            ['2018/10/31 18:00:00 GMT+0000', '2018/11/01 18:00:00 GMT+0000', '+1', 'plus eq'],
            ['2018/10/31 18:00:00 GMT+0000', '2018/11/01 20:00:00 GMT+0000', '+1', 'plus grater'],
            ['2018/10/31 18:00:00 GMT+0000', '2018/11/01 16:00:00 GMT+0000', '+1', 'plus less'],
            ['2018/11/01 18:00:00 GMT+0000', '2018/10/31 16:00:00 GMT+0000', '-1', 'minus grater'],
            ['2018/11/01 18:00:00 GMT+0000', '2018/10/31 20:00:00 GMT+0000', '-1', 'minus less'],
        ];

        for (let d of dates) {
            expect(daysDiff(d[0], d[1])).toEqual(d[2], d[3]);
        }
    });
});

