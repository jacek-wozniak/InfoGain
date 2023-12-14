import {POINTS_RATE_1, POINTS_RATE_2, AMOUNT_THRESHOLD_1, AMOUNT_THRESHOLD_2} from './constants';

export const calculatePoints = (amount) => {
    let result;
    if (amount <= AMOUNT_THRESHOLD_1) {
        return 0;
    } else if (amount > AMOUNT_THRESHOLD_1 && amount <= AMOUNT_THRESHOLD_2) {
        result = (amount - AMOUNT_THRESHOLD_1) * POINTS_RATE_1;
    } else {
        result = (amount - AMOUNT_THRESHOLD_2) * POINTS_RATE_2 + AMOUNT_THRESHOLD_1;
    }
    return Math.floor(result);
}

export const formatCurrency = (amount) => {
    const options = {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol'
    };

    return new Intl.NumberFormat('en-US', options).format(Number(amount));
}

export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(new Date(date));
}

export const fakeFetchTimeout = () => {
    return new Promise(resolve => setTimeout(resolve, 1500))
}