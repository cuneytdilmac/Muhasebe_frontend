import { useState } from "react";

interface IconProps {
    iconName: string;
    fontSize: number | string;
    color: string;
    label: string;
    onClick?: () => void;
}

export const Icon = (props: IconProps) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <i className={`pi ${props.iconName}`}
                style={{
                    fontSize: `${props.fontSize}`,
                    color: `${props.color}`,
                }} onClick={props.onClick}></i>
            <span>{props.label}</span>
        </div>
    )
}
