import { useState } from "react";

export interface CardInformation extends User {
    image: string;
    head: string;
    information: string;
}

export interface User {
    name: string;
    phoneNumber: number;
    city: string;
    country: string;
}

interface Example15Props {
    data: CardInformation
}

export const Example15 = (props:Example15Props) => {
    const [data] = useState(props.data);

    console.log(data);

    return (
        <div style={{ margin: 25, width: 400, height: 400, border: "2px solid black", borderRadius: 15 }}>
            <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_1280.jpg"
                alt="" width={396} height={100} style={{ borderRadius: "15px 15px 0px 0px" }} />
            <h3>Başlık</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, debitis quibusdam iusto quaerat tenetur vitae consectetur delectus magnam laborum hic.</p>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ marginLeft: 10 }}>
                    <img src="https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125_1280.jpg"
                        alt="" width={100} height={100} style={{ borderRadius: "50%" }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginLeft: 10 }}>
                    <p style={{ fontSize: 12, margin: 2 }}>{data.name}</p>
                    <p style={{ fontSize: 12, margin: 2 }}>{data.phoneNumber}</p>
                    <p style={{ fontSize: 12, margin: 2 }}>{data.city} | {data.country}</p>
                </div>
            </div>
        </div>
    )
}
