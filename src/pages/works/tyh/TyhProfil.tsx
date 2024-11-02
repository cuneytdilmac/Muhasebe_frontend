import { Icon } from "../ui-kit/Icon"
import thy_resmi from '../../../assets/Screenshot_4.png';


export const TyhProfil = () => {

    return (
        <div >

            <div>

                <img style={{
                    height: 300,
                    width: "100%",
                }} src={thy_resmi} alt="" />

            </div>

            <div style={{
                display: "flex",

            }}>
                <img style={{
                    height: 120,
                    width: 120,
                    borderRadius: "100%",
                }} src="https://img.ekstat.com/profiles/benim-dengemi-bozmayiniz-638283003152565473.jpg" alt="" />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: "90px 10px 20px 10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 420

                    }}>
                        <label style={{
                            color: "red",
                            fontWeight: 500
                        }} htmlFor="">Selçuk Çalışkan</label>


                        <div style={{
                            backgroundColor: "#DDE5F0",
                            padding: 8,
                            borderRadius: "100%",
                        }}>
                            <Icon
                                iconName={"pi-pencil"}
                                fontSize="18px" // Büyüklüğünü ayarlar.
                                color="blue"
                                label=""
                            />
                        </div>

                    </div>
                    <label htmlFor="">selcukcalıskan@gmail.com</label>
                    <label htmlFor="">05366801603</label>
                </div>
            </div>

        </div>
    )
}
