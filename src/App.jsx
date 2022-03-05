import classes from "./App.module.scss";
import Main from "./components/Main/Main";
import SideNav from "./components/SideNav/SideNav";
import TopNav from "./components/TopNav/TopNav";
import React from "react";

function App() {
    const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);

    return (
        <div className={`${classes.app} ${isSideNavOpen ? classes.close : ""}`}>
            <SideNav isOpen={isSideNavOpen} />
            <div className={`${classes.mainContent} ${classes.close}`}>
                <TopNav
                    isOpen={isSideNavOpen}
                    onClose={() => setIsSideNavOpen((prev) => !prev)}
                />
                <Main />
            </div>
        </div>
    );
}

export default App;
