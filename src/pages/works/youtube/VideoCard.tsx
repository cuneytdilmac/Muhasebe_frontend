import { YoutubeProps } from "./Videos"

interface VideoCardProps {
    data: YoutubeProps;
}

export const VideoCard = (props: VideoCardProps) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "36px 18px",
        }}>
            <video controls style={{
                height: 250,
                width: 360,
                borderRadius: 15,
                backgroundColor: "black",
            }}>
                <source src={props.data.video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>

            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <img style={{
                    height: 75,
                    width: 75,
                    borderRadius: "100%",
                    marginTop: 12,
                    marginRight: 12,
                }} src={props.data.image} alt="" />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: 0,
                    margin: 0
                }}>
                    <h4 style={{ marginBottom: 0 }}>{props.data.information}</h4>
                    <p style={{ marginBottom: 0 }}>{props.data.userName + " "}
                        {
                            props.data.premium && <i className="pi pi-check"></i>
                        }
                    </p>
                    <p style={{ marginBottom: 0 }}>{props.data.views} B görüntüleme - {props.data.date}</p>
                </div>
            </div>
        </div>
    )
}
