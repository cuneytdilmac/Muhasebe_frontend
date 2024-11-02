import React, { useState } from 'react'
import TemelGenelTekrar from './ArabaModeli';
export interface Car {
  model: string;
  km: number,
  yas: number,
  fiyat: number,
  hasarKaydi: boolean;
}

export const ArabalarSayfası = () => {
  const a: string = "Cüneyt";
  // a = "Sinan" diyemem const ile başladığımız için.
  let b: string = "Selçuk";
  // b = "Sinan" diyebilirim let ile başladığım için.
  let k: string = "dursun";
  const c: number = 15;
  const f: boolean = false;
  const d: any = "adana" // Her tip gibi çalışır burda string yaptık.

  // Array Kullanımı 
  const names: string[] = ['Cüneyt', "Selçuk", "Dursun"];
  const names1: string[] = [a, b, k];  // String Arrayi
  const numbers: number[] = [10, 2, 1500]; // Sayı Arrayi
  const x: boolean[] = [true, false, false, true]; // Boolan Arrayi

  // Car Interface'i kullanarak array verileri oluşturacağım.
  const car1: Car = { model: "Fiat", km: 150.000, yas: 2015, fiyat: 500.000, hasarKaydi: true };
  const car2: Car = { model: "Ford", km: 100.000, yas: 2012, fiyat: 450.000, hasarKaydi: false };

  const cars: Car[] = [car1, car2,car2,car1];

  console.log(cars);
  console.log(cars[1].fiyat);

  const [visible, setVisible] = useState(true);


  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Arabaları Göster</button>

     {/*
     - Liste Oluşturma || List Rendering Loop || Döngü
     -map fonksiyonu array içerindeki elemanları yeni bir dönüşüme sokar ve tekrar 
     dizi döner.
     */}
      {
        cars.map((car) => {
          return (
            <TemelGenelTekrar
              cars={cars}
            />
          )
        })
      }


    </div>
  )
}
