import { Car } from "./GenelTekrar1"


interface GenelTekrar2Props {
    cars: Car[];
}


export const GenelTekrar2 = (props:GenelTekrar2Props) => {

    console.log(props);

    return (
        <div>

            <div style={{
                border: "1px solid blue",
                width: 400,
                height: 260,
                margin: 20,

            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }}>
                        <p>Model: </p>
                        <p>Km: </p>
                        <p>Yas: </p>
                        <p>Fiyat: </p>
                        <p>Hasar Kaydı: </p>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }}>
                        <p>Fiat </p>
                        <p>150.000 </p>
                        <p>2015 </p>
                        <p>400.000 </p>
                        <p>Yok </p>
                    </div>

                </div>


            </div>
        </div>
    )
}