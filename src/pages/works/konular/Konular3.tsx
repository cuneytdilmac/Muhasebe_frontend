interface User {
    name: string;
    surname: string;
    phoneNumber: number;
}

export const Konular3 = () => {
    //Metod oluşturma
    const writeName = (isim: string) => {
        console.log(isim);
    }

    const writeSurName = () => {
        console.log("dilmaç");
    }

    const writeName1 = (name: string) => {
        console.log(name);
    }

    const writeNameAndSurName = (x: string, y: string, z: number, f: string, a: number) => {
        console.log(x + y + z + f + a);
    }

    const writeUser = (x: User) => {
        console.log(x);
    }
    const example = () => {
        console.log("cüneyt");
    }

    const setName = (data: number) => {
        console.log(data);
    }


    return (
        <div>
            <h1>Konular3</h1>
            <button onClick={() => writeName("Cüneyt")}>Adı Yazdır</button>
            <button onClick={writeSurName}>Soyadı Yazdır</button>
            <button onClick={() => writeName1("Selcuk")}>Adı Yazdır</button>
            <button onClick={() => writeNameAndSurName("Cüneyt", "Dilmaç", 5656, "hjvhv", 54322)}>Adı ve Soyadı Yazdır</button>
            <button onClick={() => writeUser({ name: "Cüneyt", surname: "Dilmaç", phoneNumber: 123456789 })}>User'ı Yaz</button>
            <button onClick={() => example}>Adı Yaz</button>
            <button onClick={() => setName(123456)}>123 Yazdır</button>
        </div>
    )
}