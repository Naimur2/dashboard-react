import React from "react";
import classes from "./Main.module.scss";

export default function Main() {
    const Card = () => (
        <div className={classes.card}>
            <h2>Item</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, error!
            </p>
        </div>
    );

    return (
        <main className={classes.main}>
            <div className={classes.menu}>
                {Array(10)
                    .fill(1)
                    .map((_, i) => (
                        <Card key={i} />
                    ))}
            </div>
        </main>
    );
}
