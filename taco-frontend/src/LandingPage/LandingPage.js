import React from 'react';
import { TopNav } from './TopNav/TopNav';
import taco from '../assets/taco.png';
import styles from './LandingPage.module.css';
import {SearchBar} from '../SearchBar/SearchBar';

export function LandingPage() {
    return (
        <div>
            <TopNav />
            <img src={taco} className={styles.taco} alt='taco'/>
            <SearchBar/>
        </div>
    );
}