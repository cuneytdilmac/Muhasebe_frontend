import { useState } from "react"
import { NetflixUser } from "./NetflixUser"

export interface User {   // Başka bir dosyada çağırabilmek için export getirdik.
    image: string;
    name: string;
    surname: string;
    phoneNumber: number;
    email: string;
    premium: boolean;
}

export const NetflixUsers = () => {
    const [visible, setVisible] = useState(false);
    // User interfacesini kullanarak a diye bir değişken olurturma
    const a: User = {
        image: "data:image/jpeg;base64,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",
        name: "Cüneyt",
        surname: "Dilmaç",
        phoneNumber: 1111111,
        email: "Cüneyt@gmail.com",
        premium: false,
    };
    const b: User = {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuLzvBeyT946pgUJdxR4nEBGqVBtK8l68cw&usqp=CAU",
        name: "Selçuk",
        surname: "Çalışkan",
        phoneNumber: 1111111,
        email: "selcuk@gmail.com",
        premium: false,
    };
    const c: User = {
        image: "data:image/jpeg;base64,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",
        name: "Sinan",
        surname: "Dilmaç",
        phoneNumber: 1111111,
        email: "sinan@gmail.com",
        premium: true,
    };

    const users: User[] = [a, b, c, a, b, c, b, a,];

    const arabalar: string[] = ["mercedes", "volvo", "renult", "passat", "şahin"];

    const kuşlar: string[] = ["keklik", "güvercin", "kartal", "papağan"];

    return (
        <div>
            <div style={{
                border: "1px solid #101010", // Diktörgenin çizgisini verdik.
                height: 120,             // yükselik verdik.
                margin: "32px 24px",     // Yukardan aşağından 32 sağ-sol 24 dışardan boşluk verdik.
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 12px",  // içerden boşluk.
                backgroundColor: "#101010",

            }}>
                <button style={{
                    height: 35,
                    color: "white",
                    backgroundColor: "#E50913",
                    border: "1px solid  #101010",
                    borderRadius: 10,  // Biraz yuvarlak yaptık
                    fontSize: 15,
                    opacity: 0.8   // Soluklaştırma yapar
                }} onClick={() => setVisible(true)}>Kullanıcıları Göster</button>
                <img
                    style={{
                        width: 160,
                        height: 120,
                    }}
                    src="data:image/png;base64,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" alt="" />

                <button style={{
                    height: 35,
                    color: "white",
                    backgroundColor: "#E50913",
                    border: "1px solid  #101010",
                    borderRadius: 10,
                    fontSize: 15,
                    opacity: 0.8
                }} onClick={() => setVisible(false)}>Kullanıcıları Gizle</button>
            </div>

            {
                visible ?
                    // users bir array 
                    // users'ın içine map fonksiyonu ile girdim
                    // ve tek tek userları çıkartım
                    // ve her döngüde user'ı NetflixUser 'a verdik
                    // bu sayede verilere göre component sayısı artı.
                    users.map((user: User) => {
                        return <NetflixUser data={user} />
                    })
                    : <p style={{ color: "red" }}>Kullanıcılar Gösterilemiyor!</p>
            }



            {
                /*
            <p>mersedes</p>
            <p>volvo</p>
            <p>renult</p>
            <p>passat</p>
                */
            }


            {
                arabalar.map((araba: string) => {
                    return <p>{araba}</p>
                })
            }

            {
                kuşlar.map((kuş: string) => {
                    return <button style={{ backgroundColor: "blue" }}>{kuş}</button>
                })
            }

        </div>
    )
}