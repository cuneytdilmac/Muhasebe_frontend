import { UserInformation } from "./DComponet";


interface AComponentProps {
    user?: UserInformation;
    setVisible(): void;
}

export const AComponet = (props: AComponentProps) => {

    return (
        <div style={{
            border: "1px solid blue",
            margin: "24px 16px",
            padding: "16px 12px",
            height: 180,
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div
                style={{
                    display: "flex",
                }}
            >   A
                <img src={props.user?.image} alt=""
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        marginRight: 12,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}

                >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <p>Adı: </p>
                        <p>Telefon: </p>
                        <p>Email: </p>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: 8,
                        marginRight: 8

                    }}>
                        <p>{props.user?.name}</p>
                        <p>{props.user?.phoneNumber}</p>
                        <p>{props.user?.email}</p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <button style={{
                    width: 100,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "#365486",
                    color: "#EEF5FF"
                }} onClick={() => props.setVisible()}>B'den Veri Al</button>

            </div>
        </div>
    )
}