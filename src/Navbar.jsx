import React, { useContext, useState } from "react";
import styles from './Navbar.module.css';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import ModeContext from "./ModeContext";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    const ContextData = useContext(ModeContext);
    const [inputvalue, setInputvalue] = useState('');

    function handleInput(event){
        setInputvalue(event.target.value);
    }

    function SettingCity(event){
        event.preventDefault();
        if(inputvalue.length >=3){
            console.log('valid city');
            ContextData.setCity(inputvalue);
            setInputvalue('');
        }else{
            console.log('invalid city');
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.nav_left}>
                <h1>Weather Application Kushal</h1>
            </div>
            <div className={styles.nav_right}>
                <div className={styles.mode_container}>
                    <input
                        type="checkbox"
                        checked={ContextData.mode}
                        onChange={ContextData.toggleMode}
                        className={styles.checkbox} id="checkbox"
                    />
                    <label htmlFor="checkbox" className={styles.checkbox_label} >
                        <MdDarkMode size={'1.4em'} />
                        <MdLightMode size={'1.4em'} fill="yellow" />
                        <span className={styles.ball}></span>
                    </label>
                </div>
                <div className={styles.searchInput}>
                    <form action=""
                    onSubmit={SettingCity}
                    >
                        <input
                            type="text"
                            placeholder="Input Valid City"
                            value={inputvalue}
                            onChange={handleInput}
                        />
                        <button type='submit' className={styles.searchBtn}>
                            <FaSearch size={'1.3em'} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}