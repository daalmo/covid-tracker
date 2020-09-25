import React from 'react';
import {Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

// create class-based component
class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                {/* functional-based components */}
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App; 