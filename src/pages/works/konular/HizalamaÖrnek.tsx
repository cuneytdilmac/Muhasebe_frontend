export const HizalamaÖrnek = () => {

    return (
        <div style={{
            height: 450,
            width: 480,
            border: "3px solid blue",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
        }}>

             <div style={{
                backgroundColor:"red",
                display:"flex",
                alignItems:"flex-end",
                justifyContent:"flex-end",
                height:"100%"
             }}>
             <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: "100%",
                }}
            />
             </div>
        

             <div style={{
                backgroundColor:"blue",
                display:"flex",
                alignItems:"flex-start",
                height:"100%"
             }}>
             <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: "100%",
                }}
            />
             </div>

             <div style={{
                backgroundColor:"yellow",
                display:"flex",
                alignItems:"center",
                height:"100%"
             }}>
             <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: "100%",
                }}
            />
             </div>


        </div>
    )
}
