import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Offer } from './Offers';
import { DialogContentText, DialogTitle } from '@mui/material';
import { deleteOfferAction, getAllOffersAction } from '../../slices/offerSlice';
import { useDispatch } from 'react-redux';

interface DeleteOfferDialogProps {
    offer: Offer;
    hideDeleteOfferDialog: () => void;
}

export default function DeleteOfferDialog(props: DeleteOfferDialogProps) {
    const dispatch = useDispatch();

    const deleteOffer = () => {
        deleteOfferAction(props.offer.id, () => getAllOffersAction(dispatch))
        props.hideDeleteOfferDialog();
    }

    return (
        <Dialog
            breakpoints={{ '960px': '75vw', '640px': '100vw' }}
            style={{ width: '50vw' }}
            visible={true}
            onHide={props.hideDeleteOfferDialog}
        >
            <div style={{
                display: "flex",
                justifyContent: 'center',
            }}>
                <h2>Teklifi Sil</h2>
            </div>
            <p>{props.offer.client.name} Kişisinin {props.offer.topic} Konulu Teklifini Silmek İstediğinize Emin Misiniz?</p>
            <div style={{
                display: "flex",
                justifyContent: 'flex-end'
            }}>
                <Button label="Sil" icon="pi pi-trash" severity="danger" style={{ marginRight: 16 }} onClick={() => deleteOffer()} />
                <Button label="İptal" icon="pi pi-times" onClick={props.hideDeleteOfferDialog} />
            </div>
        </Dialog>
    )
}
