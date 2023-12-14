import React, {useCallback, useEffect, useState} from "react";
import './Transactions.scss';
import fetchTransactions from "../../../services/fetchTransactions";
import Loader from "../../Loader/Loader";
import { formatDate, formatCurrency, calculatePoints } from "../../../helpers/functions";

const cache = {};

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = useCallback(async() => {
        if (cache['transactions']) {
            setTransactions(cache['transactions']);
        } else {
            setIsLoading(true);
            const data = await fetchTransactions();
            cache['transactions'] = data;
            setTransactions(data);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="transactions">
            { !isLoading
                ? transactions.length
                    ? <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => {
                                return <tr key={transaction.id}>
                                    <td>{transaction.user}</td>
                                    <td>{formatDate(transaction.createdAt)}</td>
                                    <td>{formatCurrency(transaction.amount)}</td>
                                    <td>{calculatePoints(transaction.amount)}</td>
                                </tr>
                            })}
                        </tbody>
                      </table>
                    : 'brak danych...'

                : <Loader/>
            }
        </section>
    )
}

export default Transactions;