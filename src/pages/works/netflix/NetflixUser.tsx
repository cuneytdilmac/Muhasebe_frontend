import { User } from "./NetflixUsers";

interface NetflixUserProps {
    data: User;
}

export const NetflixUser = (props: NetflixUserProps) => {

    return (
        <div style={{
            border: "1px solid #101010", // Diktörgenin çizgisini verdik.
            height: 120,             // yükselik verdik.
            margin: "32px",     // Yukardan aşağından 32 sağ-sol 32 dışardan boşluk verdik.
            backgroundColor: "#101010",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
        }}>
            <img
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: "100%"  // Tam yuvarlak yaptık.
                }}
                src={props.data.image}
                alt="" />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}>
                <p style={{ color: "#E50913", }}>Adı: <span style={{ color: "white" }}>{props.data.name}</span></p>
                <p style={{ color: "#E50913", }}>Soyadı: <span style={{ color: "white" }}>{props.data.surname}</span></p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}>
                <p style={{ color: "#E50913", }}>Telefon: <span style={{ color: "white" }}>{props.data.phoneNumber}</span></p>
                <p style={{ color: "#E50913", }}>Email: <span style={{ color: "white" }}>{props.data.email}</span> </p>
            </div>
            {
                props.data.premium
                    ?
                    <i className="pi pi-star-fill" style={{ color: "#E50913" }}></i>
                    :
                    <i className="pi pi-star" style={{ color: "#E50913" }}></i>
            }
        </div>
    )
}
