import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { AddIndividualData, NewIndividualDialog } from './NewIndividualDialog';
import { Button } from 'primereact/button';
import './Individual.css';
import { IndividualActionsTemplate } from './IndividualActionsTemplate';
import { Box, Container, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addClientAction, getAllClientsAction } from '../../../slices/clientSlice';
import { RootState } from '../../store/Store';
import IndividualCard from '../individual-card/IndividualCard';

export interface Individual {
    id: number;
    name: string;
    phoneNumber: string;
    createdDate?: Date;
}

export const Individuals = () => {
    const dispatch = useDispatch();
    const [newIndividualDialog, setNewIndividualDialog] = useState(false);
    const clients = useSelector((state: RootState) => state.clients.allClients);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        getAllClientsAction(dispatch);
    }, []);

    const addIndividual = (data: AddIndividualData) => {
        addClientAction(data, () => getAllClientsAction(dispatch));
        hideNewIndividualDialog();
    }

    const hideNewIndividualDialog = () => setNewIndividualDialog(false);
    const openNewIndividualDialog = () => setNewIndividualDialog(true);

    const header = (
        <div className='header-parent'>
            <Button icon="pi pi-plus" className='mr-2 p-button-rounded'
                tooltip='Yeni Şahıs Ekle'
                tooltipOptions={{ position: "bottom" }}
                onClick={() => openNewIndividualDialog()}
            />
        </div >
    )

    const renderNewIndividualDialog = () => {
        return (
            newIndividualDialog
                ?
                (
                    <NewIndividualDialog
                        addIndividual={addIndividual}
                        hideNewIndividualDialog={hideNewIndividualDialog}
                    />
                )
                :
                (null)
        )
    }

    const renderIndividualActions = (individual: any) => {
        return (
            <IndividualActionsTemplate data={individual} />
        )
    }

    const renderIndividualTable = () => {
        return (
            <div className="card">
                <DataTable value={clients} stripedRows showGridlines resizableColumns header={header}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                    <Column field="name" header="İsim" />
                    <Column field="phoneNumber" header="Telefon" />
                    <Column body={renderIndividualActions} header="İşlemler" />
                </DataTable>
            </div>
        )
    }

    const showWithIndividiualCard = () => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                {
                    clients.map((client: Individual) => {
                        return <IndividualCard name={client.name} phoneNumber={client.phoneNumber} date={client.createdDate} />
                    })
                }
            </div>
        )
    }
    return (
        <div className='datatable-crud-demo surface-card p-4 border-round shadow-2 container'>

            <Container style={{ justifyContent: 'center' }}>
                <Box pb={5} style={{ background: 'white', marginTop: 16 }}>
                    <Typography variant='h5' component='h2' gutterBottom>
                        Şahıslar
                    </Typography>
                    <button onClick={() => setVisible(!visible)}>Göster</button>
                    <Divider />
                </Box>
            </Container>

            {
                visible
                    ?
                    renderIndividualTable()

                    :
                    showWithIndividiualCard()
            }

            {renderNewIndividualDialog()}
        </div>
    )


}
