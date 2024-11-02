import { useState } from "react";

interface User {
    name: string;
    phoneNumber: number;
    email: string;
}

export const Konular4 = () => {
    // Method 'lar ile şartlı ifadeler
    const [user1, setUser1] = useState({ name: "Cüneyt Dilmaç", phoneNumber: 5316778813, email: "cüneytdilmaç@gmail.com" });
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState(1);

    const changeData = () => {
        if (data == 1) {
            setUser1({ name: "Selcuk", phoneNumber: 666666666, email: "selcukçaliskan@gmail.com" });
            setData(2);
        } else if (data == 2) {
            setUser1({ name: "Ahmet", phoneNumber: 5555555, email: "ahmet@gmail.com" });
            setData(1);
        }
    }

    const setProfile = () => {
        if (visible == true) {
            setVisible(false);
        } else if (visible == false) {
            setVisible(true);
        }
    }

    return (
        <div>
            <h1>Konular4</h1>
            <button onClick={setProfile} style={{ marginBottom: 20 }}>profili göster / profili gizle</button>
            <button onClick={changeData}>datayı değiştir</button>
            {
                visible
                    ?
                    (
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: 400, height: 200, border: "1px dotted blue" }}>
                            <div>
                                <img src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400" alt="" style={{ width: 150, height: 150, borderRadius: "50%" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "40px 20px 40px 20px" }}>
                                <p>{user1.name}</p>
                                <p>{user1.phoneNumber}</p>
                                <p>{user1.email}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        null
                    )
            }
        </div>
    )
}
