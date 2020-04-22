import React, { Fragment, useState, memo } from 'react'
import PropTypes from 'prop-types';
import "./tabs.css";

const Tabs = memo(({ activeIndex, onTabChange, children }) => {
    const [active, setActiveIndex] = useState(activeIndex)

    const tabChange = (event, index) => {
        event.preventDefault();
        setActiveIndex(index);
        onTabChange(index);
    }

    return (
        <div className="react-lxl-tab">
            {React.Children.map(children, (child, index) => {
                return (
                    <div
                        className={`react-lxl-tabs ${active === index ? "react-lxl-tabs-active" : ""}`}
                        onClick={event => { tabChange(event, index) }}
                        role="button"
                    >
                        {child}
                    </div>
                )
            })}
        </div>
    )
});

export default Tabs;

Tabs.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

export const Tab = ({ tab, children }) => {
    return (
        <Fragment>
            {tab}
            <div className="react-lxl-tab-content">
                {children}
            </div>
        </Fragment>
    )
}


