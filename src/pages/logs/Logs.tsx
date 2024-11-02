import { Box, Container, Divider, Typography } from "@mui/material"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { useEffect } from "react";
import { getAllLogsAction } from "../../slices/logSlice";

export interface Log {
    id: number;
    type: string;
    logMessage: string;
    operationSuccessful: boolean;
    date?: Date;
}

export const Logs = () => {
    const dispatch = useDispatch();
    const logs = useSelector((state: RootState) => state.logs.allLogs);

    useEffect(() => {
        getAllLogsAction(dispatch);
    }, []);

    const renderLogsTable = () => {
        return (
            <div className="card">
                <DataTable value={logs} stripedRows showGridlines resizableColumns
                    paginator rows={6} rowsPerPageOptions={[6, 10, 25, 50]} >
                    <Column field="date" header="Tarih" />
                    <Column field="type" header="Türü" body={translateTypesToTurkish} />
                    <Column field="logMessage" header="Kayıt Mesajı" />
                    <Column field="operationSuccessful" header="İşlem" body={translateOperationsToTurkish} />
                </DataTable>
            </div>
        )
    }

    const translateTypesToTurkish = (data: Log) => {
        //Türleri türkçe yapacağım o yüzden metot ismini bu amacı belirten 
        // bir isim yaptım türleriTürkçeYap diye
        if (data.type == "AddClient") {
            return "Müşteri Ekleme";
        }
        else if (data.type == "UpdateClient") {
            return "Müşteri Güncelleme";
        }
        else if (data.type == "DeleteClient") {
            return "Müşteri Silme";
        }
        else {
            return null
        }
    }

    const translateOperationsToTurkish = (data: Log) => data.type ? "Başarılı" : "Başarısız";

    return (
        <div className='datatable-crud-demo surface-card p-4 border-round shadow-2 container'>
            <Container style={{ justifyContent: 'center' }}>
                <Box pb={5} style={{ background: 'white', marginTop: 16 }}>
                    <Typography variant='h5' component='h2' gutterBottom>
                        Kayıtlar
                    </Typography>
                    <Divider />
                </Box>
            </Container>
            {renderLogsTable()}
        </div>
    )
}