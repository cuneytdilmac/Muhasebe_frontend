export const InstagramUserCard3 = () => {
    return (
        <div style={{
            border: "1px solid red",
            height: 250,
            width: 530,
            margin: "24 px 0",
            borderRadius: 15,
        }}>
            <div style={{
                backgroundColor:"red",
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-start",
                margin:"22px 22px"
            }}>
                <img style={{
                    borderRadius: "100%",
                    height: 122,
                    width: 122,

                }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvM1T6J-WBpirhfGkrfNEF2GD1jsw25pGVw&usqp=CAU" alt="" />

            </div>

            <button>kaydet</button>
        </div>
    )
}