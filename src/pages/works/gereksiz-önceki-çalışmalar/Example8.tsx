import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Product {
    id: string;
    name?: string;
    phoneNumber?: number;
    email?: string;
    cüneyt?: string;
}

export const Example8 = () => {
    // const [products, setProducts] = useState<Product[]>([]);
    const a: Product = { id: "1", name: "mesut", phoneNumber: 5, email: "a@gmail.com", cüneyt: "x" };
    const b: Product = { id: "2", name: "barış", cüneyt: "y" };
    const c: Product = { id: "3", name: "cüneyt" };
    const products: Product[] = [a, b, c];

    const renderIndividualTable = () => {
        return (
            <div className="card">
                <DataTable value={products}>
                    <Column field="id" header="Kod" />
                    <Column field="name" header="İsim" />
                    <Column field="phoneNumber" header="Telefon" />
                    <Column field="email" header="Email" />
                    <Column field="cüneyt" header="Cüneyt" />
                </DataTable>
            </div>
        )
    }

    return (
        <div>
            <h1>Şahıslar</h1>
            {renderIndividualTable()}
        </div>
    )
}
