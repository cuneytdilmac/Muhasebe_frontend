import { User } from "./Users"

interface UserCardProps {
    users: User[];
}

export const UserCard = (props: UserCardProps) => {
    // Bir tane card tasarlar ne kadar veri varsa hepsi için aynı cardı kullanır.

    // 60 x 10.000 = 600.000 satır kod.
    // 60 x 8 = 480 satır.

    return (
        <div>
           {props.users.map((user:User)=>{
            return(
                <div style={{
                    border: "1px solid #40A2D8",
                    margin: "24px 24px",
                    padding: "16px 24px",
                    display: "flex",
                }}
                >
                    <img src={user.image} alt=""
                        width={135}
                        height={135}
                        style={{
                            borderRadius: "50%",
                            marginRight: 24,
                            marginTop: 16,
                        }}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginRight: 16
                        }}>
                            <p style={{ fontWeight: 500 }}>Adı: </p>
                            <p style={{ fontWeight: 500 }}>Telefon: </p>
                            <p style={{ fontWeight: 500 }}>Email: </p >
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <p>{user.name}</p>
                            <p>{user.phoneNumber}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            )
           })}
        </div>
    )
}
