import { useState } from "react";

// Interface kullanımı

interface Kullanıcı {
    name: string;
    phoneNumber: number;
}

export const GenelTekrar1 = () => {
    // a bir değişken a'nın tipi number a 5'e eşittir.
    const a: number = 5;
    let b: number = 10;
    let c: string = "ağrı";
    const d: string = "patnos";
    c = "ankara";
    b = 8;

    const [visible, setVisible] = useState(true);
    // Senaryo: Değiştir buttonuna tıkladığımızda selçuk cüneyt olarak değişsin.
    const f: any = "selcuk"; // any tipi bütün tiplerin yerine kullanılır ama gerekmedikçe kullanmayacaz.
    // Array: Bir veya daha fazla eleman için kullanılır.
    // Array index'i 0,1,2 ... diye gider.
    // users string arrayi içine "" ile bişiler alır.
    const users: string[] = ["selçuk", "cüneyt", "ali"];
    console.log(users);
    // phoneNumbers number array'i içine sayı alır
    const phoneNumbers: number[] = [111111, 2222222, 333333];
    // x boolean tipinde bir array
    const x: boolean[] = [true, false, true, false];
    // y any tipinde bir array
    const y: any[] = ["selcuk", 11111, false];
    //************************************************************************** */
    // PEKİ KENDİ TİPİMİZİ NASIL YAZICAZ.
    // Interface kullanırsak kendi tipimizi oluşturmuş oluruz.
    const kullanıcı1: Kullanıcı = { name: "cüneyt", phoneNumber: 12345 };
    console.log(kullanıcı1.name);
    // kullanıclar Kullanıcı tipinde bir arraydir içinde birçok kullanıcı olabilir.
    const kullanıcılar: Kullanıcı[] = [
        { name: "selcuk", phoneNumber: 222222 },  // 0. index
        { name: "cüneyt", phoneNumber: 333333 },  // 1.index
        { name: "ali", phoneNumber: 444444 },    // 2.index
    ];

    console.log(kullanıcılar);

    return (
        <div>
            <p>{a}</p>
            <p>{b}</p>
            <p>{a + b}</p>
            <p>{c + d}</p>
            <p>{a + c}</p>
            <p>{visible ? "selçuk" : "cüneyt"}</p>
            <button onClick={() => setVisible(!visible)}>Değiştir</button>
            <p>{kullanıcı1.phoneNumber}</p>
            <p>{kullanıcılar[0].phoneNumber}</p>
            <p>{kullanıcılar[0].name}</p>
            <p>{kullanıcılar[1].name}</p>
            <p>{kullanıcılar[2].name}</p>
            <p>{kullanıcılar[2].phoneNumber}</p>
        </div>
    )
}
