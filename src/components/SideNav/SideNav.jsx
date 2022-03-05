import React from "react";
import classes from "./SideNav.module.scss";

export default function SideNav({ isOpen }) {
    return (
        <div className={`${classes.sidenav} ${isOpen ? classes.close : ""}`}>
            <ul className={`${classes.sidebarContent} list`}>
                <li className={classes.sidebarItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Home
                    </a>
                </li>
                <li className={classes.sidebarItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        About
                    </a>
                </li>
                <li className={classes.sidebarItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Dashbord
                    </a>
                </li>
                <li className={classes.sidebarItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Sells
                    </a>
                </li>
                <li className={classes.sidebarItem}>
                    <a className="link" href="https://github.com/Naimur2">
                        Output
                    </a>
                </li>
            </ul>
        </div>
    );
}
