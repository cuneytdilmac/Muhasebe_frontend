import { Button } from "./Button"
import { Icon } from "./Icon"

export const UIKITAnasayfa = () => {
    
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="white"
                        borderRadius={20}
                        backgroundColor="#7949FF"
                        name="Label"
                        width={80}
                        height={40}
                    />
                </div>


                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="white"
                        borderRadius={2}
                        backgroundColor="#7949FF"
                        name="Label"
                        width={80}
                        height={40}
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="blue"
                        borderRadius={2}
                        backgroundColor="#E9E1FF"
                        name="Label"
                        width={80}
                        height={40}
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="white"
                        borderRadius={4}
                        backgroundColor="#FF5656"
                        name="Label"
                        width={80}
                        height={40}
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="black"
                        borderRadius={4}
                        backgroundColor="white"
                        name="Label"
                        width={80}
                        height={40}
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="white"
                        borderRadius={20}
                        backgroundColor="#7949FF"
                        name="Label"
                        width={80}
                        height={40}
                        icon="pi-heart-fill"
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="#7949FF"
                        borderRadius={6}
                        backgroundColor="white"
                        name="Label"
                        width={80}
                        height={40}
                        icon="pi-heart-fill"
                        iconColor="#7949FF"
                        border="1px solid #7949FF"
                    />
                </div>

                <div style={{
                    margin: 10
                }}>
                    <Button
                        color="white"
                        borderRadius={6}
                        backgroundColor="#FF5656"
                        name="Label"
                        width={80}
                        height={40}
                        icon="pi-heart-fill"
                        iconColor="white"
                    />
                </div>
            </div>


            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 500
            }}>
                <Icon
                    iconName="pi-home"
                    fontSize="24px"
                    color="blue"
                    label="Home"
                />
                <Icon
                    iconName="pi-search"
                    fontSize="24px"
                    color="yellow"
                    label="Search"
                />
            </div>

        </div>
    )
}