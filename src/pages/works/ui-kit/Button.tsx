interface ButtonProps {
    color: string;
    backgroundColor: string;
    width: number | string;
    height: number | string;
    borderRadius: number | string ;
    name: string;
    icon?: string;
    iconColor?: string;
    border?: string | undefined;
    flexDirection?: string | undefined;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {


    return (
        <button style={{
            color: props.color,
            backgroundColor: props.backgroundColor,
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius,
            border: props.border || "none",
            display: "flex",
            flexDirection: props.flexDirection ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center",
        }} onClick={props.onClick}>
            <i className={`pi ${props.icon}`}
                style={{
                    color: `${props.iconColor}`,
                    margin: "0 6px 0 6px"
                }}></i>
            <span>{props.name}</span>
        </button>
    )
}
