import { useState } from "react";
import { Button } from "../ui-kit/Button";

interface User {
    name: string,
    surname: string,
    person?: {
        a: string,
        b: number,
        c?: {
            name: string
        }
    }
}

export const GenelTekrar = () => {
    const name: string = "Cüneyt";
    const surname: string = "dilmaç";
    const user1: User = { name: "selçuk", surname: "çalışkan", person: { a: "a", b: 1, c: { name: "jale" } } };
    const user2: any = { name: "selçuk1", surname: "çalışkan1", x: 65625 };

    const users:  User[] = [user1]
    const users1: string[] = [name, user1.surname]
    const users2: number[] = [123, 555, 1, 0]
    const x: boolean = true;
    const xs: boolean[] = [false, true, false,];
    console.log(users1);

    const [visible, setVisible] = useState(false);




    return (
        <div>
            <p>Görüntü1 : {name}</p>
            <p>{surname}</p>
            <p>{user1.name}</p>
            <p>{user2.name}</p>
            <p>{user1.person?.a}</p>
            <p>{user1.person?.c?.name}</p>

            <div style={{
                width: 400,
                height: 100,
                border: "1px solid red",
                marginTop: 10,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 15,

            }}>
                {
                    visible
                        ?
                        <p>{name}</p>
                        :
                        "selçuk"
               }


            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                width: 400,
                margin: "10px 15px",
            }}>
                <Button
                    color="white"
                    backgroundColor="blue"
                    width={180}
                    height={40}
                    borderRadius={15}
                    name="Kullanıcıyı Göster"
                    icon="pi-user"
                    onClick={() => setVisible(!visible)}
                />
            </div>


            {/*
            // Butona tıkladığımda Cüneyt yazısını göster kapat
            
            */}


        </div>
    )
}
