import { useState } from "react"
import { Button } from "../ui-kit/Button"
import { Icon } from "../ui-kit/Icon"

export const InstagramUserCard = () => {
    const [iconHeart, setIconHeart] = useState(false);

    return (
        <div style={{
            border: "1px solid blue",
            height: 240,
            width: "60%",
            minWidth: 470,
            margin: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 16,
            borderRadius: 18
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <img style={{
                    borderRadius: "100%",
                    height: 120,
                    width: 120,
                }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAT3x-r04nBdoFa249x9nVm-IJZ7xaw9hAw&usqp=CAU"
                    alt="" />
                <p>Cüneyt Dilmaç</p>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <p style={{
                    textAlign: "justify", // Paragrafı hizalama yapar.
                    fontSize: 14,
                    margin: 16
                }}>Hayvan sevgisi insan ya da ağaç sevgisi kadar önemlidir. Her zaman hayvanı seven insandan korkma derler. Çünkü masum bir canlıyı sevmek insanın yumuşak kalbini gösterir. </p>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginLeft: 16,
                    marginRight: 16
                }}>
                    <div style={{
                        marginRight: 16,
                    }}>
                        <button style={{
                            border:"none",
                            backgroundColor:"white",
                        }} onClick={() => setIconHeart(!iconHeart)}>
                            <Icon
                                iconName={iconHeart ? "pi-heart-fill" : "pi-heart"}
                                fontSize="22px"
                                color="blue"
                                label="Beğen"
                            />
                        </button>
                    </div>
                    <div style={{
                        marginRight: 16,
                    }}>
                        <Icon
                            iconName="pi-comment"
                            fontSize="22px"
                            color="navajowhite"
                            label="Yorum"
                        />
                    </div>
                    <div style={{
                        marginRight: 16,
                    }}>
                        <Icon
                            iconName="pi-share-alt"
                            fontSize="22px"
                            color="black"
                            label="Paylaş"
                        />
                    </div>
                    <Button
                        color="white"
                        borderRadius={20}
                        backgroundColor="#27296d"
                        name="Takip Et"
                        width={100}
                        height={40}
                    />
                </div>
            </div>
        </div>
    )
}
