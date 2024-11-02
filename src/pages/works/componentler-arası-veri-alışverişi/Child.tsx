export const Child = (props: any) => {
    console.log(props.data4 + props.data5);

    return (
        <div>
            <p>{props.data}</p>
            <p>{props.data2}</p>
            <p>{props.data3}</p>
            <p>{props.data4}</p>
            <p>{props.data5}</p>
        </div>
    )
}
