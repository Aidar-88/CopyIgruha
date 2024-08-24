import { useState, useEffect } from 'react';

function CLock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId)
    }, []);
    return (
        <>
            <p>{time}</p>
        </>
    );
}

export default CLock;
