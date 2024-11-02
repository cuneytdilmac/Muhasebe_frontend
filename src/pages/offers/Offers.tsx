import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { useEffect, useState } from "react";
import { addOfferAction, getAllOffersAction } from "../../slices/offerSlice";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Divider } from "@mui/material";
import { Button } from "primereact/button";
import { AddOfferData, AddOfferDTO, NewOfferDialog } from "./NewOfferDialog";
import OfferActionsTemplate from "./OfferActionsTemplate";
import { Individual } from "../clients/individuals/Individuals";
import { Common } from "../../common/Common";

export interface Offer {
    id: number;
    topic: string;
    amount: number;
    unitPrice: number;
    offerStatus: boolean;
    offerDate: Date;
    client: Individual;
}

export const Offers = () => {
    const dispatch = useDispatch();
    const offers = useSelector((state: RootState) => state.offers.allOffers);
    const [visibleNewOfferDialog, setVisibleNewOfferDialog] = useState(false);

    useEffect(() => {
        getAllOffersAction(dispatch);
    }, []);

    const addOffer = (data: AddOfferData) => {
        const newOfferData: AddOfferDTO = {
            topic: data.topic,
            unitPrice: Number(data.unitPrice),
            amount: Number(data.amount),
            clientId: Number(data.client?.value),
        }
        addOfferAction(newOfferData, () => getAllOffersAction(dispatch));
        setVisibleNewOfferDialog(false);
    }

    const header = (
        <div className='header-parent'>
            <Button icon="pi pi-plus" className='mr-2 p-button-rounded'
                tooltip='Yeni Teklif Ekle'
                tooltipOptions={{ position: "bottom" }}
                onClick={() => setVisibleNewOfferDialog(true)}
            />
        </div >
    )

    const renderNewIndividualDialog = () => {
        return (
            visibleNewOfferDialog
                ?
                <NewOfferDialog
                    hideNewOfferDialog={() => setVisibleNewOfferDialog(false)}
                    addOffer={addOffer}
                />
                :
                null
        )
    }

    const findTotalPrice = (amount: number, unitPrice: number) => {
        return (amount * unitPrice + " TL");
    }

    const findOfferStatus = (offerStatus: boolean) => {
        return offerStatus ? "Açık" : "Kapalı";
    }

    const renderOfferActions = (offer: Offer) => {
        return (
            <OfferActionsTemplate data={offer} />
        )
    }

    const offersTable = (
        <DataTable value={offers} stripedRows showGridlines resizableColumns header={header}
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
        >
            <Column header="Tarih" body={(offer) => Common.tarihDegistir(offer.offerDate)} />
            <Column field="client.name" header="Müşteri Adı" />
            <Column header="Teklif Durumu" body={(offer) => findOfferStatus(offer.offerStatus)} />
            <Column field="topic" header="Konu" />
            <Column field="amount" header="Miktar" />
            <Column field="unitPrice" header="Birim Fiyatı" />
            <Column header="Toplam Fiyatı" body={(offer) => findTotalPrice(offer.amount, offer.unitPrice)} />
            <Column body={renderOfferActions} header="İşlemler" />
        </DataTable>
    )

    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <h2>Teklifler</h2>
                <Divider />
            </div>
            {offersTable}
            {renderNewIndividualDialog()}
        </div>
    )
}

