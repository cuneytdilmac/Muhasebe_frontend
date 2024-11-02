import { CardInformation, Example15 } from "./Example15";

export const Example14 = () => {

    const cardInformation1: CardInformation = {
        image: "https://media.istockphoto.com/id/1540505962/tr/foto%C4%9Fraf/istanbul-maiden-tower-from-the-east-in-sunset.webp?b=1&s=612x612&w=0&k=20&c=AOprhjmTTEHqIKQ_bL2VnJU_X9wp6K6uT4iaURkQPFc=",
        head: "Özgeçmiş",
        information: "Bu bir özgemiş bilgisidir.",
        name: "Cüneyt Dilmaç",
        phoneNumber: 45667889,
        city: "Ağrı",
        country: "Türkiye"
    }

    return (
        <div>
            <Example15 
            data={cardInformation1}
            />
        </div>
    )
}
