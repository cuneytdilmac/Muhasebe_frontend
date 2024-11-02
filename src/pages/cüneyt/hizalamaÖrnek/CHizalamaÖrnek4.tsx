import { Button } from "../../works/ui-kit/Button"

export const CHizalamaÖrnek4 = () => {

    return (
        <div style={{
            width: 300,
            height: 450,
            backgroundColor: "blueviolet",
            margin: 24
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqlUqHDFJFp5oUKVTjsDmoamYu5o1c6PRbQ&usqp=CAU" alt=""
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: "100%",
                    marginTop: 12,
                }}
            />
            <h3 style={{ color: "white" }}>Lily-Grace Colley</h3>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                color: "white",
            }}>
                <p>156 Post</p>
                <p>1012 Likes</p>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginLeft: 34,
                marginRight: 34
            }}>
                <Button
                    color="white"
                    borderRadius={"100%"}
                    backgroundColor="#FF5656"
                    name=""
                    width={40}
                    height={40}
                    icon="pi-instagram"
                    iconColor="white"
                />
                <Button
                    color="white"
                    borderRadius={"100%"}
                    backgroundColor="#FF5656"
                    name=""
                    width={40}
                    height={40}
                    icon="pi-twitter"
                    iconColor="white"
                />
                <Button
                    color="white"
                    borderRadius={"100%"}
                    backgroundColor="#FF5656"
                    name=""
                    width={40}
                    height={40}
                    icon="pi-linkedin"
                    iconColor="white"
                />
                <Button
                    color="white"
                    borderRadius={"100%"}
                    backgroundColor="#FF5656"
                    name=""
                    width={40}
                    height={40}
                    icon="pi-whatsapp"
                    iconColor="white"
                />
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div style={{
                    margin: "24px 12px"
                }}>
                    <Button
                        color="white"
                        borderRadius={8}
                        backgroundColor="black"
                        name="Follow"
                        width={120}
                        height={40}
                    />
                </div>
                <div>
                    <Button
                        color="white"
                        borderRadius={8}
                        backgroundColor="black"
                        name="Message"
                        width={120}
                        height={40}
                    />
                </div>


            </div>

        </div>
    )
}
