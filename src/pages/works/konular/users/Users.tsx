import { useState } from "react";
import { UserCard } from "./User";

export interface User {
    name: string;
    phoneNumber: number;
    email: string;
    image: string;
}

export const Users = () => {
    const user1: User = { name: "Cüneyt Dilmaç", phoneNumber: 1111111111, email: "cüneytdilmaç@gmail.com", image: "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600" };
    const user2: User = { name: "Selçuk Çalışkan", phoneNumber: 222222222, email: "selçukçalışkan@gmail.com", image: "https://media.gettyimages.com/id/1366960612/photo/adult-foreman-in-warehouse.jpg?s=612x612&w=0&k=20&c=ArunEWxTTvarUgvH4xW9Kv_8RJdwF9f5zm7A2OSLx2w=" };
    const user3: User = { name: "Sinan Dilmaç", phoneNumber: 33333333333, email: "sinan@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const user4: User = { name: "Ahmet Kormak", phoneNumber: 444444444, email: "l@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const user5: User = { name: "Veli Durmaz", phoneNumber: 55555555555, email: "k@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const user6: User = { name: "Selami Yalçın", phoneNumber: 66666666, email: "f@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const user7: User = { name: "Adnan Kaya", phoneNumber: 777777777, email: "v@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const user8: User = { name: "Ayşe Çiftçi", phoneNumber: 8888888888888, email: "a@gmail.com", image: "https://media.gettyimages.com/id/1406912124/photo/portrait-of-a-man-in-flower-shop.jpg?s=612x612&w=0&k=20&c=X4f9fq3H1becC5LoDUsD_ucWeHpaatpI_ddPJlhTUso=" };
    const [visible, setVisible] = useState(false);
    const [users, setUsers] = useState([user1, user2, user3, user4, user5, user6, user7, user8]);

    return (
        <div>
            <div style={{
                border: "1px solid #40A2D8",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "24px 16px",
                padding: "0px 8px"
            }}>
                <h2 style={{
                    color: "#40A2D8"
                }}>Kullanıcılar</h2>
                <button style={{
                    width: 135,
                    height: 45,
                    backgroundColor: "#40A2D8",
                    color: "white",
                    borderRadius: 12,
                    borderColor: "#40A2D8"
                }}
                    onClick={() => setVisible(!visible)}
                >Kullanıcıları Göster</button>
            </div>
            {visible && <UserCard users={users} />}
        </div>
    )
}