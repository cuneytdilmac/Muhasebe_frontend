import { VideoCard } from "./VideoCard"
import { YoutubeProps } from "./Videos"

export const Videolar = () => {
    const berat: YoutubeProps = {
        video: "https://www.youtube.com/watch?v=1rVY08gRGmA&pp=ygUJZmFpcnl0YWxl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jzK5GlQdJFwAauooHJxVz32qdjJG-1hTTw&s",
        information: "Alexander Rybak 2009",
        userName: "Berat Özen",
        views: 750,
        premium: true,
        date: "1 gün önce",
    }
    const users: YoutubeProps[] = [berat];

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            {
                users.map((user: YoutubeProps) => {
                    return (
                        <VideoCard data={user} />
                    )
                })

            }


        </div>
    )
}

