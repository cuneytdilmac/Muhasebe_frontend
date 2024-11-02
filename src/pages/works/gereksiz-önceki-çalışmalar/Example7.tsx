interface Product {
  code: string;
  name?: string;
  phoneNumber?: number;
}
// Product interface'ine phoneNumber diye yeni bir field ekle tipi number olsun.
//Product'ın code name ve phoneNumber diye fieldları olsun ancak phoneNumber null olabilir olsun.

export const Example7 = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const a: Product = { code: "asdf", name: "mesut", phoneNumber: 56 };
  const b: Product = { code: "altay", name: "barış", phoneNumber: 56 };
  const c: Product = { code: "cüneyt", name: "selcuk", phoneNumber: 56 };
  const d: Product = { code: "ali", name: "ayşe", phoneNumber: 56 };
  const e: Product = { code: "murat",  phoneNumber: 56 };
  const f: Product = { code: "sinan", name: "erhan" };


  //  console.log(product1);
  // [0,1,2,3,4,5,6,7,8,9.....]
  const products: Product[] = [c, e, a, d, b, f];
  console.log(products);
  console.log(products[3]);
  console.log(products[2].code);
  console.log(products[1].name);




  return (
    <div style={{ backgroundColor: "#EEEEEA", width: 700, height: 400, padding: 40 }}>
      <div style={{ backgroundColor: "#DADBD1", width: 600, height: 300, display: "flex" }}>
        <div style={{ width: 300, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <h3 style={{ textAlign: "start", paddingLeft: 10 }}>Fill out form!</h3>
          <p style={{ textAlign: "start", paddingLeft: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis doloribus natus unde error recusandae nemo dolorem. Minima et necessitatibus ad quo iusto magnam odit voluptate cumque voluptatum, dicta qui.</p>
        </div>
        <div style={{ width: 300 }}>
          <input style={{ width: 250, height: 30, margin: 25 }} type="text" placeholder="Name" />
          <input style={{ width: 250, height: 30, margin: 25 }} type="text" placeholder="Email" />
          <input style={{ width: 250, height: 30, margin: 25 }} type="text" placeholder="Subjet" />
        </div>
      </div>
    </div>
  )
}


