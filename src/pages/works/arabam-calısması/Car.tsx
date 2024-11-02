import { yellow } from "@mui/material/colors"

export const Car = () => {
    return (
        <div style={{
            height: 275,
            width: 300,
            padding: 16,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        }}>

            <img src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" alt=""
                style={{
                    height: 120,
                    width: "100%",
                }}
            />

            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontWeight: "bold",
            }}>
                <p>Mersin</p>
                <p>2012</p>
            </div>

            <p style={{
                margin: 0
            }}>Volkswagen Jetta 1.6 TDi Comfortl...</p>

            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
            }}>
                <p style={{
                    color: "red",
                    fontWeight: "bold",
                }}>602.000 TL</p>
            </div>

        </div>
    )
}