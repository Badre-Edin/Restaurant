import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyReservation() {

    const [getReservation, setGetReservation] = useState([]);

    useEffect(() => {
        fetchList();
    }, []);
    const fetchList = () => {
        axios
            .get('http://localhost:3000/test')
            .then((res) => {
                
                setGetReservation(res.data);
            })
            .catch((err) => {
               
            });
    };
    return (
        <div>
            <h1>My Reservation</h1>
            <div>
                {getReservation.map((list, key) => {
                    console.log(list);
                    return <div key={key}>
                        <ul>
                            <li>{list.phone}</li>
                        </ul>

                    </div>
                })}
            </div>
        </div>
    )
}


export default MyReservation;