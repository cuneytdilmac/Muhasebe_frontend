// Frontendte Typescript ya da Javascript kullanıyoruz (Güncel modern olan Typescript).
// Framework ya da kütüphane olarakta web uygulamarı için React, Angular, Vue kullanıyoruz.

import { useState } from "react";

// 1-> Component Oluşturma
export const Frontend1 = () => {
    // 2-> Değişken tanımı
    const a = 123;
    // 3-> let ve const kullanımı (let kullandığımız değeri aşağıda yeniden atama yapabiliriz ama conts değiştirilemez.)
    let name1 = "Cüneyt";
    name1 = "Selçuk";
    const name2 = "Cüneyt";
    // name2 = "Selçuk"; const olduğu için atama yapamadık.
    // 4-> Tipler (string,number,boolean,any)
    const b: string = "cüneyt123m$½";
    const c: number = 1234;
    const d: boolean = true;
    // 5-> Array kullanımı
    const users: any[] = ["selcuk", "cüneyt", "ali", 123, true, {}];
    // 6-> State kullanımı
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("Cüneyt");

    // 7-> Metot kullanımı ve state kullanımına örnek
    const showNameButton = () => {
        setVisible(true);
        const toplam = topla(5, 10)
        console.log(toplam)
        const x = isimleriBirleştir("cüneyt","dilmaç")
        console.log(x)
    }

    function topla(a: number, b: number): number {
        return (a + b);
    }

    //isimleri birleştir diye bir mettod oluştur bu mettod iki tane değer beklesin ikiside string olsun birinin değeri opsiyonel olsun 
    const isimleriBirleştir = (name: string, surname?: string): string => {
        if (surname) {
            return name + " " + surname;
        } else {
            return "soy isim yok";
        }
    }



    return (
        <div>
            //**6 için örnek */
            <button onClick={() => setName("Selçuk")}>{name}</button>
            <button onClick={() => showNameButton()}>ismi göster</button>
            {
                visible
                    ?
                    (
                        <p>Cüneyt Dilmaç</p>
                    )
                    :
                    (
                        null
                    )
            }
        </div>
    )
}