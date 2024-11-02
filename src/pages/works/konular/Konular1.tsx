
export const Konular1 = () => {
    //Tiplerle değişken tanımlama 
    //string tipinde value adında bir değişken oluştur ve cüneyt 'e  ata.
    const value: string = "cüneyt";
    //number tipinde value1 adında bir değişken oluştur ve 100'e ata.
    const value1: number = 100;
    //let kullanımı (let değeri sonradan değiştirilebilir ama const sonradan değiştirilemez.)
    //number tipinde value2 adında bir değişken oluştur ve 100'e ata.
    let value2: number = 100;
    // value2'yi console'la yazdırma
    console.log(value2); // Sonuç:100
    // value2 değerini let ile yaptığımız için 200' e eşitleyebiliriz.
    value2 = 200;
    // value2'yi console'la yazdırma
    console.log(value2); //Sonuç:200
    //Toplama ve Çıkarma İşlemleri
    // value1 ve value2'yi topla console'a bas.
    console.log(value1 + value2); //Sonuç: 300
    //value1'ile  500'ü topla ve bu sonuçtan value2'yi çıkart ve console'a yazdır.
    console.log(value1 + 500 - value2);//Sonuç: 400
    //value1'i 10 ile çarp 500 ekle sonuçtan value2'yi çıkart ve çıkan sonucu value1 e böl ve console'a yazdır.
    console.log(value1 * 10 + 500 - value2 / value1);//sonuç:1498
    // number tipinde value3 diye bir değişken oluştur ve 1000'e ata sonra value1 ile topla console'a yazdır.
    let value3: number = 1000;
    console.log(value3 + value1);
    // number tipinde value4 diye bir değişken oluştur ve 1000'e ata sonra value5 diye bir number tipinde değişken oluştur ve
    // value1 ile value4'ün toplamını bu değere ata ve console'a yazdır.
    const value4: number = 1000;
    const value5: number = value1 + value4;
    console.log(value5); //Sonuç: 1100
    //number tipinde value6 diye bir değişken tanımla value6 value1 ile value4'ün çarpımı olsun.
    const value6: number = value1 * value4;
    console.log(value6);
    // Console'a Cüneyt ve value6 'yı yazdır.
    console.log(value6 + "cüneyt");
    // Cüneyt bugün 100000 TL'ye araba aldı.
    console.log(`Cüneyt bugün ${value6} TL'ye araba aldı`);
    const value10: number = 100;
    console.log(`Cüneyt bugün ${value10} TL'ye araba aldı`)
    //any tipinde value7 diye bir değişken tanımla "Cüneyt123" değerini ata.
    const value7: any = "cüneyt123"; //any tipini her tip için kulanabilirsin.
    console.log(value7);

    return (
        <h1>{value6}</h1>
    )
}