import { useState } from "react"
import { Button } from "../ui-kit/Button"
import { Icon } from "../ui-kit/Icon"

export const InstagramUserCard2 = () => {
    const [premium, setPremium] = useState(false);
    const [heart, setHeart] = useState(false);
    const [share, setShare] = useState(false);
    const [comment, setComment] = useState(false);

    return (
        <div style={{
            border: "1px solid red",
            height: 220,
            width: 520,
            margin: "24px 0",
            borderRadius: 15,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "10px 10px"
            }} >
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <img style={{
                        borderRadius: "100%",
                        height: 110,
                        width: 110,
                    }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6rDRK5or6ZmPNJM1OVE6ITC8eY_OVRYFFA&usqp=CAU" alt="" />

                    <label>Cüneyt Dilmaç</label>

                </div>
                <p style={{
                    textAlign: "justify",
                    margin: 12

                }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto sed aspernatur, et laboriosam non eaque iste sequi laborum saepe?</p>
                <div style={{
                    height: 100,
                    width: 200,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    {
                        premium
                            ?
                            <Icon
                                iconName="pi-star-fill"
                                fontSize="22px"
                                color="blue"
                                label=""
                            />
                            :
                            <Icon
                                iconName="pi-star"
                                fontSize="22px"
                                color="blue"
                                label=""
                            />
                    }
                </div>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    // backgroundColor: "green",
                    width: "80%",
                    marginLeft: 124

                }}>

                    <Icon
                        iconName={heart ? "pi-heart-fill" : "pi-heart"}
                        fontSize="22px"
                        color="blue"
                        label="Beğen"
                        onClick={() => setHeart(!heart)}
                    />
                    <Icon
                        iconName={comment ? "pi-flag-fill" : "pi-flag"}
                        fontSize="22px"
                        color="red"
                        label="Yorum"
                        onClick={() => setComment(!comment)}
                    />
                    <Icon
                        iconName={share ? "pi-bookmark-fill" : "pi-bookmark"}
                        fontSize="22px"
                        color="green"
                        label="Paylaş"
                        onClick={() => setShare(!share)}
                    />
                </div>
                <div style={{
                    //  backgroundColor: "yellow",
                    width: "25%",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 48
                }}>
                    <Button
                        color="white"
                        borderRadius={20}
                        backgroundColor="#27296d"
                        name="Premium Yap"
                        width={100}
                        height={40}
                        onClick={() => setPremium(!premium)}
                    />
                </div>
            </div>
        </div>
    )
}
