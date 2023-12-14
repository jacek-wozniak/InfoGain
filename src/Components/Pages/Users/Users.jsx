import React, {useCallback, useEffect, useState} from "react";
import './Users.scss';
import fetchUsers from "../../../services/fetchUsers";
import Loader from "../../Loader/Loader";

const cache = {};

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMonth = useCallback((month) => {
        const date = new Date();
        date.setMonth(date.getMonth() + month);
        return date.toLocaleString('en', { month: 'long' });
    }, []);

    const fetchData = useCallback(async() => {
        if (cache['users']) {
            setUsers(cache['users']);
        } else {
            setIsLoading(true);
            const data = await fetchUsers();
            cache['users'] = data;
            setUsers(data);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="users">
            { !isLoading
                ? users.length
                    ? <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>{getMonth(0)}</th>
                                <th>{getMonth(-1)}</th>
                                <th>{getMonth(-2)}</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((transaction) => {
                            return <tr key={transaction.id}>
                                <td>{transaction.user}</td>
                                <td>{transaction.pointsThisMonth}</td>
                                <td>{transaction.pointsOneMonthAgo}</td>
                                <td>{transaction.pointsTwoMonthsAgo}</td>
                                <td>{transaction.pointsThisMonth + transaction.pointsOneMonthAgo + transaction.pointsTwoMonthsAgo}</td>
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

export default Users;