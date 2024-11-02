import { InstagramUserCard } from "./InstagramUserCard"
import { InstagramUserCard2 } from "./InstagramUserCard2"
import { InstagramUserCard3 } from "./InstagramUserCard3"
import { InstagramUserCard2x } from "./İnstagramUserCard2x"

export const InstagramAnasayfa = () => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <InstagramUserCard2x />
            <InstagramUserCard2 />
            <InstagramUserCard3 />
            <InstagramUserCard />
        </div>
    )
}
