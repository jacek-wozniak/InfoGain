import {fakeFetchTimeout} from "../helpers/functions";

export default async function () {
    await fakeFetchTimeout();
    return [
        {
            "user":"user 5",
            "pointsThisMonth":0,
            "pointsOneMonthAgo":152,
            "pointsTwoMonthsAgo":1621,
            "id":"5"
        },
        {
            "user":"user 4",
            "pointsThisMonth":958,
            "pointsOneMonthAgo":534,
            "pointsTwoMonthsAgo":0,
            "id":"4"
        },
        {
            "user":"user 7",
            "pointsThisMonth":838,
            "pointsOneMonthAgo":202,
            "pointsTwoMonthsAgo":194,
            "id":"7"
        },
        {
            "user":"user 6",
            "pointsThisMonth":0,
            "pointsOneMonthAgo":0,
            "pointsTwoMonthsAgo":970,
            "id":"6"
        },
        {
            "user":"user 2",
            "pointsThisMonth":0,
            "pointsOneMonthAgo":0,
            "pointsTwoMonthsAgo":638,
            "id":"2"
        },
        {
            "user":"user 3",
            "pointsThisMonth":0,
            "pointsOneMonthAgo":602,
            "pointsTwoMonthsAgo":0,
            "id":"3"
        },
        {
            "user":"user 8",
            "pointsThisMonth":340,
            "pointsOneMonthAgo":146,
            "pointsTwoMonthsAgo":0,
            "id":"8"
        },
        {
            "user":"user 1",
            "pointsThisMonth":0,
            "pointsOneMonthAgo":0,
            "pointsTwoMonthsAgo":0,
            "id":"1"
        }
    ];
}