// Component Tanımı
// Deşişken Tanımı
// Props Kullanımı
// Şartlı İfadeler if else
// Fonksiyon/Metot kullanımı
// Html css button kullanımı

import { User } from "./GenelTekrar";

interface ValueProps {
    data: User;
}

export const GenelTekrar2 = (props: ValueProps) => {


    return (
        <div style={{ width: 450, height: 250, border: "1px solid blue", display: "flex",justifyContent:"flex-start" ,alignItems:"center"}}>
            <div style={{width:200}}>
                <img src={props.data.image} width={200} style={{borderRadius:"50%"}} />
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <p>Adı : {props.data.name}</p>
                <p>Telefon : {props.data.phoneNumber}</p>
                <p>Email : {props.data.email}</p>
            </div>
        </div>
    )
}