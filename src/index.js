import React from "react";
import ReactDOM from "react-dom";
import Tabs, { Tab } from "./Tabs";

const Demo = () => {
    const onTabChange = () => {
        //dosomething
    }

    return (
        <div style={{ width: "800px", margin: "auto"}}>
            <Tabs activeIndex={0} onTabChange={onTabChange}>
                <Tab tab="选项一">
                    内容一
                </Tab>
                <Tab tab="选项二">
                    内容二
                </Tab>
            </Tabs>
        </div>
    )
}

ReactDOM.render(<Demo />, document.getElementById("root"))