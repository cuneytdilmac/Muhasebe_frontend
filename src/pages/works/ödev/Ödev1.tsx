export const Ödev1 = () => {
    // shift + 7 tuşu 
    //Tiplerle değişken tanımla
    //string tipinde value adında bir değişken oluştur ve selçuk'ata 
    const value: string = "selçuk";
    //number tipinde value1 adında bir değişken oluştur ve 200'ata
    const value1: number = 200;
    //number tipinde value2 adında bir değişken oluştur ve 200' ata
    let value2: number = 200;
    //value2 consola yazdırma 
    console.log(value2); // sonuç:200
    //value2  değerini let ile yaptığımız için 200' e eşitliyebiliriz 
    value2 = 200;

    //toplama çıkarma işlemleri 
    //value1 ve value2 topla consola'bas .
    console.log(value1 + value2);

    return (
        <h1>Konular1 tekrar yapılacak.</h1>
        
    )
}
