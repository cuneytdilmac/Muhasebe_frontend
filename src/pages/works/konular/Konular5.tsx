import { useState } from "react"

export const Konular5 = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>{visible ? "Gizle" : "Göster"}</button>
            <div>
                {
                    visible
                        ?
                        <p>Cüneyt</p>
                        :
                        "Selçuk"
                }
            </div>
        </div>
    )
}
