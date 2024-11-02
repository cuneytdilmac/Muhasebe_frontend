import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import YonetimPaneliCard from "./YonetimPaneliCard"
import { useEffect } from "react";
import { getNumberOfClientsAction } from "../../slices/clientSlice";
import { getNumberOfOffersAction } from "../../slices/offerSlice";
import { getNumberOfLogsAction } from "../../slices/logSlice";

export const Home = () => {
    const dispatch = useDispatch();
    const numberOfOffers = useSelector((state: RootState) => state.offers.numberOfOffers);
    const numberOfClients = useSelector((state: RootState) => state.clients.numberOfClients);
    const numberOfLogs = useSelector((state: RootState) => state.logs.numberOfLogs);

    useEffect(() => {
        setTimeout(() => getNumberOfOffersAction(dispatch), 1000) // Burda dataları 1 saniye beklettik
        setTimeout(() => getNumberOfClientsAction(dispatch), 2000) // Burda dataları 2 saniye beklettik
        setTimeout(() => getNumberOfLogsAction(dispatch), 3000) // Burda dataları 3 saniye beklettik
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            width: "100%",
        }}>
            <h1 style={{
                fontSize: "48px",  // Daha büyük başlık
                fontWeight: "bold",  // Kalın font
                color: "#242337",  // Logo 1. rengi
                textAlign: "center",  // Ortalanmış başlık
                letterSpacing: "3px",  // Harfler arasında boşluk
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",  // Hafif gölge
                marginBottom: "40px",  // Alt boşluk ekleyelim
            }}>Yönetim Paneli</h1>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}>
                <YonetimPaneliCard label="Teklifler" numberOfElement={numberOfOffers} path="/teklifler" />
                <YonetimPaneliCard label="Şahıslar" numberOfElement={numberOfClients} path="/sahislar" />
                <YonetimPaneliCard label="Kayıtlar" numberOfElement={numberOfLogs} path="/kayitlar" />
            </div>
        </div>
    )
}
