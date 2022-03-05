import React from "react";
import classes from "./topNav.module.scss";

export default function TopNav({ isOpen, onClose }) {
    return (
        <div className={`${classes.topnav} ${isOpen ? classes.close : ""}`}>
            <button onClick={onClose}>toggle</button>
            <ul className={`${classes.topnavContent} list`}>
                <li className={classes.topnavItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Home
                    </a>
                </li>
                <li className={classes.topnavItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        About
                    </a>
                </li>
                <li className={classes.topnavItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Dashbord
                    </a>
                </li>
                <li className={classes.topnavItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Sells
                    </a>
                </li>
                <li className={classes.topnavItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Browse
                    </a>
                </li>
            </ul>
        </div>
    );
}
