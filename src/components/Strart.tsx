import React from "react";
import style from "@/styles/Start.module.css";

interface Component {
    number: number;
    title: string;
    text: string;
}

interface ComponentList {
    componentList: Component[];
}

const Start: React.FC<ComponentList> = ({ componentList }) => {
    return (
        <div id="get-started" className={style.container}>
            <h1>It is easy to get started</h1>
            <div className={style.containerComponent}>
                {componentList.map((component) => (
                    <div key={component.number} className={style.component}>
                        <div>
                            <h1>{component.number}</h1>
                        </div>
                        <h3>{component.title}</h3>
                        <p>{component.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Start;
