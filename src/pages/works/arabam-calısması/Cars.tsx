import { Car } from "./Car"
import "./Araba.css";

export const Cars = () => {
    return (
        <div style={{
            backgroundColor: "#F7F7F7",
            padding: 24,
            width:"100%"
        }}>
            <h2 className="big-header">Vitrin</h2>

            <div style={{
                display: "flex",
                flexDirection:"column"
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                }}>
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                }}>
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                </div>
            </div>


        </div>
    )
}