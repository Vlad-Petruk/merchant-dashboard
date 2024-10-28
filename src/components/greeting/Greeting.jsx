import React from 'react';
import styles from './Greeting.module.css'

const Greeting = () => {
    const userName = "Vlad Petruk"; 

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Hello, Luna Edge!</h1>
                <p className={styles.subtitle}>My name is {userName}.</p>
            </div>
        </div>
    );
};

export { Greeting }
