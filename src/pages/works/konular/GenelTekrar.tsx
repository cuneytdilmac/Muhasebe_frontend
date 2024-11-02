// Javascript - Typescript (Bunlar Önyüz Dili) : Frontend(Ön Yüz) : Kullanıcıların Gördüğü Kısım
// Türkiye'de ve Avrupa en çok kullanılan framework (Çatı) React js, Angular js,Vue js.
// Frawework (çatı) yani hazır dosyalar klasörler sunar işini kolaylaştırır.
// Html, css, Typescript.
// Html örnek : <div><div/>,<p></p> .. h1 , h2, button, ....

/* 
  Css: style oluşturup içine renk gibi kalınlık gibi yükseklik genişlik gibi kodlar yazılır.
  Css örnek:  style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: 400, height: 200, border: "1px dotted blue" }}
  Css örnek: Class oluşturup kodları içine yazarız.
  Css class örnek : .header-parent {
    display: flex;
    justify-content: flex-end;
}
*/
// React: bize bir çatı sunar ve bu çatı altında bazı dosyalar hazır olarak boş bir proje halinde verilir.(App.tsx App.css ...)
// React js te bilmen gerekenler:
// 1 Component Mantığı
// 2 Props Mantığı (GenalTekrar2 'de)
// 3 Değişkenler ve Tipler
// 4 Fonksiyonlar
// 5 Css Html kullanımını bilmek
// 6 Scope (Alan) mantığı
// 7 Şartlı İfadeler if else (GenalTekrar2 'de)
// 8 Interface Kullanımı (Kendi tipimizi oluşturuyoruz.)
// ...

// Şimdi Hepsinin örneği aşağıda yapalım.

// 8 Interface Tanımı User burda bir interface'tir.
export interface User {
    phoneNumber: number;
    name: string;
    email: string;
    image:string;
}

// 1 Genel Tekrar bir Component'tir.
export const GenelTekrar = () => {
    //3 Değişkenler: phoneNumber bir değişkendir number tiptir.(Sayısal olarak düşün).
    const phoneNumber: number = 56262626626;
    //3 Değişkenler: email bir değişkendir string tiptir.(Tırnak içinde sayı harf işaret vb.).
    const email: string = "cüneyt.123@gmail.com";
    //3 Değişkenler: visible bir değişkendir boolean tiptir.(true yada false)
    const visible: boolean = true;
    //3 Değişkenler: value bir değişkendir any tiptir.(Tırnak,Sayı,true-false herşey kullanılabilir.)
    const value: any = "cüneyt";
    // Kendi tipimi oluşturmak için User interface'i kullandım ve bir user1 diye değer oluşturdum.
    // user1 değişken User tip Interface
    const user1: User = { phoneNumber: 12345767654, name: "cüneyt", email: "cüneyt.123@gmail.com" ,image:"https://pfpmaker.com/_nuxt/img/features-item11@2x.05d6826.webp"};
    console.log(user1.name, user1.phoneNumber, user1.email);
    // 3 Değişkenler : const veya let ile başlar.
    //const ve let kullanımına örnek
    const a: string = "selçuk";
    //  a = "cüneyt" değiştirilemez.
    let b: string = "cüneyt";
    b = "cüneyt1";
    console.log(b);

    // 4 Fonksiyonlara Örnek
    // changeUserName diye bir fonksiyon-metot tanımı
    // Fonksiyon bir işlem yapma sanatıdır - eylem bildirir.
    // Senaryo: usera ait name'i değiştirmek için bir fonksiyon-metot yaptık
    const changeUserName = () => {
        console.log(user1);
        user1.name = "selçuk63";
        user1.phoneNumber = 11111;
        console.log(user1.name);
        console.log(user1.phoneNumber);
    }

    return (
        <div style={{ color: "yellow" }}>  {/* scope (alan) mantığı kodun başladığı ve son bulduğu yerdir */}
            {/* scope (alan) mantığı örnek Selam Dünya yazısı bir yerde kırmızı bir yerde mavidir çünkü scope ları farklıdır. */}
            <div style={{ color: "red" }}>
                <h1>Selam Dünya1! (Hello World!)</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div style={{ color: "blue" }}>
                <h1>Selam Dünya2! (Hello World!)</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
                <div>
                    <h1>Selam Dünya3! (Hello World!)</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h1>Selam Dünya4! (Hello World!)</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <button onClick={changeUserName}>İsim Değiştir</button>
        </div>
    )
}