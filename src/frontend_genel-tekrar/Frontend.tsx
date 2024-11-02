import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Frontend.css';
import { Frontend1 } from './Frontend1';

const Frontend: React.FC = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // useEffect kullanım örneği
  useEffect(() => {
    console.log('Bileşen ilk kez yüklendi');
    return () => console.log('Bileşen temizlendi');
  }, []);

  // useCallback ile memorized function örneği
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useMemo ile performans optimizasyonu
  const expensiveCalculation = useMemo(() => {
    return count * 10;
  }, [count]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="fe-container">
      <h1 className="fe-title">React ve TypeScript ile Frontend Kavramları</h1>

      <div className="fe-card-container">

        {/* 1. TypeScript, JavaScript, React ve Angular Nedir? */}
        <div className="fe-card">
          <h2>1. TypeScript, JavaScript, React ve Angular Nedir?</h2>
          <p>
            JavaScript, dinamik ve etkileşimli web uygulamaları oluşturmak için kullanılan bir dil. TypeScript, JavaScript'in tip güvenliği sağlayan uzantısıdır. React, bileşen bazlı yapısı ile UI geliştiren bir kütüphanedir. Angular ise tam bir framework'tür.
          </p>
        </div>

        {/* 2. Component Oluşturma */}
        <div className="fe-card">
          <h2>2. React'te Component Oluşturma</h2>
          <pre>{`const MyComponent: React.FC = () => {
  return <h1>Merhaba, React!</h1>;
};

export default MyComponent;`}</pre>
          <p>
            Bu, basit bir React bileşenidir ve UI'yi bölerek yönetilebilir ve yeniden kullanılabilir hale getirir.
          </p>
        </div>

        {/* 3. let ve const Kullanımı */}
        <div className="fe-card">
          <h2>3. let ve const Kullanımı</h2>
          <pre>{`let count = 0;
const name = "React";`}</pre>
          <p>
            <code>let</code>, yeniden atanabilir değişkenler için, <code>const</code> ise sabitler için kullanılır.
          </p>
        </div>

        {/* 4. Değişken ve Tip Tanımlama */}
        <div className="fe-card">
          <h2>4. Değişken ve Tip Tanımlama</h2>
          <pre>{`let age: number = 30;
let name: string = "John";
let isMarried: boolean = false;`}</pre>
          <p>
            TypeScript'te değişkenler, tipleriyle birlikte tanımlanır. Bu, kodun daha güvenli olmasını sağlar.
          </p>
        </div>

        {/* 5. JSX ile HTML Kullanımı */}
        <div className="fe-card">
          <h2>5. JSX ile HTML Kullanımı</h2>
          <pre>{`const MyComponent: React.FC = () => {
  return <div><p>Bu JSX!</p></div>;
};`}</pre>
          <p>
            JSX, JavaScript içinde HTML benzeri yapıları kullanmamızı sağlar. Bu, React bileşenlerinde sıkça kullanılır.
          </p>
        </div>

        {/* 6. Scope Mantığı */}
        <div className="fe-card">
          <h2>6. Scope (Kapsam) Mantığı</h2>
          <pre>{`if (true) {
  let blockScoped = "Bu sadece bu blokta erişilebilir";
}`}</pre>
          <p>
            JavaScript'te <code>let</code> ve <code>const</code> ile tanımlanan değişkenler, yalnızca tanımlandıkları blok içinde erişilebilir olur.
          </p>
        </div>

        {/* 7. Array Kullanımı */}
        <div className="fe-card">
          <h2>7. Array (Dizi) Kullanımı</h2>
          <pre>{`let numbers: number[] = [1, 2, 3];`}</pre>
          <p>
            TypeScript'te diziler, belirli bir türle tanımlanabilir. Böylece, diziye sadece belirlenen türdeki veriler eklenebilir.
          </p>
        </div>

        {/* 8. State Kullanımı */}
        <div className="fe-card">
          <h2>8. React'te State Kullanımı</h2>
          <pre>{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Arttır</button>`}</pre>
          <p>
            State, React bileşenlerinde verilerin yönetilmesini sağlar. State değiştiğinde bileşen otomatik olarak yeniden render edilir.
          </p>
        </div>

        {/* 9. Metot Oluşturma */}
        <div className="fe-card">
          <h2>9. JavaScript'te Metot Oluşturma</h2>
          <pre>{`function topla(a: number, b: number): number {
  return a + b;
}`}</pre>
          <p>
            Fonksiyonlar, belirli görevleri gerçekleştirmek için kullanılır. TypeScript ile fonksiyonların tipleri de belirlenebilir.
          </p>
        </div>

        {/* 10. Interface ve Kendi Tipimizi Tanımlama */}
        <div className="fe-card">
          <h2>10. Interface ve Kendi Tipimizi Tanımlama</h2>
          <pre>{`interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com"
};`}</pre>
          <p>
            TypeScript, nesnelerin yapısını belirlemek için <code>interface</code> kullanır. Bu, belirli bir yapıda veri oluşturmayı sağlar.
          </p>
        </div>

        {/* 11. Button ve onClick Event Kullanımı */}
        <div className="fe-card">
          <h2>11. Button ve onClick Event'i Kullanımı</h2>
          <pre>{`<button onClick={() => console.log('Tıklandı!')}>Tıkla</button>`}</pre>
          <p>
            React'te kullanıcı etkileşimleri, olay dinleyicileri ile yönetilir. <code>onClick</code> gibi olaylar, kullanıcı etkileşimlerini yönetmeyi sağlar.
          </p>
        </div>

        {/* 12. Props ile Componentler Arası Veri Geçişi */}
        <div className="fe-card">
          <h2>12. Componentler Arası Veri Geçişi (Props Kullanımı)</h2>
          <pre>{`interface Props {
  message: string;
}

const MessageComponent: React.FC<Props> = ({ message }) => {
  return <p>{message}</p>;
};

// Kullanımı
<MessageComponent message="Merhaba!" />`}</pre>
          <p>
            Props, bileşenler arası veri geçişi yapmayı sağlar. Üst bileşenden alt bileşene veri aktarmak için kullanılır.
          </p>
        </div>

        {/* 13. React Router ile Sayfa Yönlendirme */}
        <div className="fe-card">
          <h2>13. React Router ile Sayfa Yönlendirme</h2>
          <pre>{`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<Router>
  <Switch>
    <Route path="/home" component={Home} />
  </Switch>
</Router>`}</pre>
          <p>
            React Router, tek sayfa uygulamalarında (SPA) sayfa yönlendirmeleri yapmak için kullanılır.
          </p>
        </div>

        {/* 14. Şartlı İfadeler if-else Kullanımı */}
        <div className="fe-card">
          <h2>14. Şartlı İfadeler if-else Kullanımı</h2>
          <pre>{`function checkAge(age: number) {
  if (age >= 18) {
    return "Yetişkin";
  } else {
    return "Çocuk";
  }
}`}</pre>
          <p>
            Koşullu ifadeler, belirli bir koşula göre farklı sonuçlar döndüren yapı taşlarıdır.
          </p>
        </div>

        {/* 15. Ternary Operator Kullanımı */}
        <div className="fe-card">
          <h2>15. Ternary Operator ile Şartlı İfade Kullanımı</h2>
          <pre>{`const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <p>Hoşgeldiniz!</p> : <p>Lütfen giriş yapın.</p>}
  </div>
);`}</pre>
          <p>
            Ternary operatörü, kısa ve basit koşullu ifadeler için kullanılır.
          </p>
        </div>

        {/* 16. CSS ve Stil Kullanımı */}
        <div className="fe-card">
          <h2>16. CSS ve Stil Kullanımı</h2>
          <pre>{`const style = {
  color: "blue",
  fontSize: "20px"
};

return <p style={style}>Bu stilize edilmiş bir metin</p>;`}</pre>
          <p>
            React'te inline stil kullanımı ile HTML elementlerine doğrudan stil eklenebilir.
          </p>
        </div>

        {/* 17. Redux Toolkit ile State Yönetimi */}
        <div className="fe-card">
          <h2>17. Redux Toolkit ile Global State Yönetimi</h2>
          <pre>{`import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;`}</pre>
          <p>
            Redux Toolkit, uygulamanın global state yönetimini kolaylaştıran bir araçtır. Global verileri yönetmek için kullanılır.
          </p>
        </div>

        {/* 18. Popup Kullanımı */}
        <div className="fe-card">
          <h2>18. Popup Kullanımı</h2>
          <pre>{`const [showPopup, setShowPopup] = useState(false);

return (
  <div>
    <button onClick={() => setShowPopup(true)}>Popup Göster</button>
    {showPopup && <div className="popup">Bu bir popup!</div>}
  </div>
);`}</pre>
          <p>
            React'te popup'lar, state değişiklikleri ile yönetilir. Popup'ın görünürlüğü, bir state'e bağlı olarak kontrol edilir.
          </p>
        </div>

        {/* 19. Tablo İçinde Veri Gösterme */}
        <div className="fe-card">
          <h2>19. Tablo İçinde Veri Gösterme</h2>
          <pre>{`const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);`}</pre>
          <p>
            Tablo verileri, JavaScript'teki <code>map()</code> fonksiyonu ile dinamik olarak eklenebilir.
          </p>
        </div>

        {/* 20. Debug İşlemleri */}
        <div className="fe-card">
          <h2>20. Frontend Debugging (Hata Ayıklama)</h2>
          <p>
            React projelerinde debugging (hata ayıklama) işlemi, <code>console.log()</code> kullanılarak yapılabilir. Ayrıca, tarayıcıda yerleşik Developer Tools ile breakpointler koyarak hata ayıklama yapılabilir.
          </p>
        </div>

        {/* 21. Local Storage Kullanımı */}
        <div className="fe-card">
          <h2>21. Local Storage Kullanımı</h2>
          <pre>{`localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');`}</pre>
          <p>
            Local Storage, tarayıcıda veri depolamak için kullanılır. Veriler, tarayıcı kapatılsa bile kalıcıdır.
          </p>
        </div>

        {/* 22. useMemo ile Performans Optimizasyonu */}
        <div className="fe-card">
          <h2>22. useMemo ile Performans Optimizasyonu</h2>
          <pre>{`const expensiveCalculation = useMemo(() => {
  return count * 10;
}, [count]);`}</pre>
          <p>
            <code>useMemo</code>, pahalı hesaplamaların gereksiz yere çalışmasını engeller ve performansı optimize eder.
          </p>
        </div>

        {/* 23. useCallback ile Fonksiyon Hatırlama */}
        <div className="fe-card">
          <h2>23. useCallback ile Fonksiyon Hatırlama</h2>
          <pre>{`const increment = useCallback(() => {
  setCount(count + 1);
}, [count]);`}</pre>
          <p>
            <code>useCallback</code>, bir fonksiyonun gereksiz yere yeniden oluşturulmasını engelleyerek performansı iyileştirir.
          </p>
        </div>

        {/* 24. Fragment Kullanımı */}
        <div className="fe-card">
          <h2>24. Fragment Kullanımı</h2>
          <pre>{`return (
  <React.Fragment>
    <h1>Başlık</h1>
    <p>Bu bir paragraf</p>
  </React.Fragment>
);`}</pre>
          <p>
            <code>Fragment</code>, gereksiz <code>div</code> elementleri oluşturmadan çoklu JSX öğesi döndürmek için kullanılır.
          </p>
        </div>

        {/* 25. Lazy Loading ve Suspense */}
        <div className="fe-card">
          <h2>25. Lazy Loading ve Suspense</h2>
          <pre>{`const MyComponent = React.lazy(() => import('./MyComponent'));

return (
  <Suspense fallback={<div>Yükleniyor...</div>}>
    <MyComponent />
  </Suspense>
);`}</pre>
          <p>
            Lazy loading, bileşenlerin ihtiyaç duyuldukça yüklenmesini sağlar. Bu, uygulamanın başlangıç yükleme süresini kısaltır ve performansı artırır.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Frontend;
