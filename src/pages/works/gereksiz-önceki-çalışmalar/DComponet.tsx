import { useState } from "react";
import { AComponet } from "./AComponet"
import { BComponet } from "./BComponet"

export interface UserInformation {
    name: string;
    phoneNumber: number;
    email: string;
    image: string;
}

export const DComponent = () => {
    const user: UserInformation = { name: "Cüneyt Dilmaç", phoneNumber: 1111111, email: "cüneyt@gmail.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjsHcZzZZVsgn1pqUxW-NIoksDls4qx6CHA&usqp=CAU" };
    const [visible, setVisible] = useState(true);

    return (
        <div>
            {
                visible
                    ?
                    <div>
                        <AComponet user={user} setVisible={() => setVisible(visible)} />
                        <BComponet setVisible={() => setVisible(!visible)} />
                    </div>
                    :
                    <div>
                        <AComponet setVisible={() => setVisible(!visible)} />
                        <BComponet user={user} setVisible={() => setVisible(visible)} />
                    </div>
            }
        </div>
    )
}