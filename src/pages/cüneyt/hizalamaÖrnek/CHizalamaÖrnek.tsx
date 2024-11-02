export const CHizalamaÖrnek = () => {

    return (
        <div style={{
            border: "1px solid blue", // kenar çizgisi verdik
            width: 450,              // genişlik
            height: 450,             // yükseklik
            margin: 20,              // dışardan boşluk
            backgroundColor: "yellow",
            display: "flex",
        }}>

            <div style={{
                backgroundColor: "red",
                display: "flex",
                alignItems: "flex-end",
            }}>
                <button>Kaydet</button>
            </div>

            <div style={{
                backgroundColor: "blue",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",



            }}>
                <img src="ed-tbn0.gsthttps://encryptatic.com/images?q=tbn:ANd9GcRdqlUqHDFJFp5oUKVTjsDmoamYu5o1c6PRbQ&usqp=CAU" alt=""
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: "100%",   // resmi tam yuvarlak yaptık.
                    }}
                />
            </div>

        </div>
    )
}
