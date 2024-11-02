 
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const Form = () => {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <div className="card flex justify-content-center" style={{margin:10}}>
                <InputText placeholder="Adı" value={value} />
            </div>
            <div className="card flex justify-content-center">
                <InputText placeholder="Soyadı" value={value} />
            </div>
        </div>
    )
} 