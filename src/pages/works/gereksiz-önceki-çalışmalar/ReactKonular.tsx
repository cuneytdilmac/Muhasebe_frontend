interface User {
    name: string;
    phoneNumber: number;
}

export const ReactKonular = (props: any) => {
    //Tipler string number boolean any [] array
    //String Kullanımı
    const a: string = "A cüneyt selcuk 123 ,?";
    console.log(a);
    //Number Kullanımı
    const b: number = 100;
    const c: number = 50;
    console.log(b + c);
    //Boolean Kullanımı true yada false kullanılır.
    const d: boolean = true;
    console.log(d);
    //any Kullanımı bütün tipleri karşılar her kullanılabilir.
    const e: any = "100 true cüneyt";
    console.log(e);
    //Array Kullanımı
    const f: string[] = ["cüneyt", "selcuk"];
    const g: any[] = ["cüneyt", 100, false];
    //Interface Kullanımı
    const user0: User = { name: "Ahmet", phoneNumber: 56562626262 };
    const user1: User = { name: "Cüneyt", phoneNumber: 56562626262 };
    const user2: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user3: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user4: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user5: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user6: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user7: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user8: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user9: User = { name: "selçuk", phoneNumber: 16562626262 };
    const user10: User = { name: "selçuk", phoneNumber: 16562626262 };
    console.log(user1, user2);
    //Interface ile Array Kullanımı
    const users: User[] = [user0,user1, user2,user3,user4,user5,user6,user7,user8,user9,user10];
    console.log(users);

    users.map((user: User) => {
        console.log(user);
    })

    return (
        <div>
            <h5>Props kullanarak componentler arasında veri alışverişi</h5>
            <p>{props.value}</p>
            <h5>Tip Kullanımları</h5>
            <h5>Interface Kullanımı</h5>
            <h5>Interface Kullanımı</h5>
            <h5>Tablo Kullanımı</h5>

            <table>
                <tr>
                    <th>isim</th>
                    <th>telefon</th>
                </tr>
                <tr>
                    <td>Cüneyt!</td>
                    <td>56565656!</td>
                </tr>
                <tr>
                    <td>selcuk!</td>
                    <td>165665!</td>
                </tr>
            </table>


            <table>
                <tr>
                    <th>Sipariş verenlerin isimleri</th>
                    <th>telefon</th>
                </tr>

                {users.map((user: User) => {
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>
                })}

            </table>
        </div>
    )
}