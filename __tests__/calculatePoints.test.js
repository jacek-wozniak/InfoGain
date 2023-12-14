const { calculatePoints } = require('../src/helpers/functions.js');

// Definiujemy stałe zgodne z implementacją funkcji
const POINTS_RATE_1 = 1;
const POINTS_RATE_2 = 2;
const AMOUNT_THRESHOLD_1 = 50;
const AMOUNT_THRESHOLD_2 = 100;

describe('calculatePoints', () => {
    it(`should calculate points for amount below ${AMOUNT_THRESHOLD_1}`, () => {
        const result = calculatePoints(50);
        expect(result).toBe(0);
    });

    it(`should calculate points for amount between ${AMOUNT_THRESHOLD_1} and ${AMOUNT_THRESHOLD_2}`, () => {
        const amount = 90;
        const expectedPoints = (amount - AMOUNT_THRESHOLD_1) * POINTS_RATE_1;
        const result = calculatePoints(amount);
        expect(result).toBe(expectedPoints);
    });

    it(`should calculate points for amount above ${AMOUNT_THRESHOLD_2}`, () => {
        const amount = 250;
        const expectedPoints =
            (amount - AMOUNT_THRESHOLD_2) * POINTS_RATE_2 + AMOUNT_THRESHOLD_1;
        const result = calculatePoints(amount);
        expect(result).toBe(Math.floor(expectedPoints));
    });
});