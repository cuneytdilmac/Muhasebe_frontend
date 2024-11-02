import React, { useRef, useState } from 'react';
import { Offer } from './Offers';
import Select from 'react-select';
import { OfferActionOptions, offerActionOptions } from './OfferActionsData';
import EditOfferDialog, { EditOfferData, EditOfferDefaultData } from './EditOfferDialog';
import DeleteOfferDialog from './DeleteOfferDialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { getAllOffersAction, updateOfferAction } from '../../slices/offerSlice';
import { AppDispatch } from '../store/Store';
import { useDispatch } from 'react-redux';

interface OfferActionsTemplateProps {
    data: Offer;
}

export default function OfferActionsTemplate(props: OfferActionsTemplateProps) {
    const dispatch: AppDispatch = useDispatch();
    const [editOfferDialog, setEditOfferDialog] = useState(false);
    const [deleteOfferDialog, setDeleteOfferDialog] = useState(false);
    const toast = useRef<Toast>(null);

    const showSuccess = (clientName: string) => {
        toast.current?.show({ severity: 'success', summary: 'Başarılı', detail: clientName + ' ın Teklifi Güncellendi.', life: 5000 });
    }

    const onChange = (selectedOption: OfferActionOptions) => {
        if (selectedOption.value == "edit") {
            setEditOfferDialog(true);
        } else if (selectedOption.value == 'delete') {
            setDeleteOfferDialog(true);
        }
    }

    const editOffer = (data: EditOfferDefaultData) => {
        const editOfferData: EditOfferData = {
            id: data.id,
            topic: data.topic,
            amount: Number(data.amount),
            unitPrice: Number(data.unitPrice),
            clientId: Number(data.client?.value),
        }
        updateOfferAction(editOfferData, () => getAllOffersAction(dispatch));
        showSuccess(data.client!!.label);
        setEditOfferDialog(false);
    }

    return (
        <div>
            <Toast ref={toast} />
            <Select
                value={[]}
                placeholder="İşlem Seç"
                options={offerActionOptions as any}
                onChange={(opt: any) => onChange(opt)}
                hideSelectedOptions={false}
                isClearable={true}
                isSearchable={false}
                menuPortalTarget={document.body}
            />
            {
                editOfferDialog
                    ?
                    <EditOfferDialog
                        editOffer={editOffer}
                        offer={props.data}
                        hideEditOfferDialog={() => setEditOfferDialog(false)}
                    />
                    :
                    null
            }
            {
                deleteOfferDialog
                    ?
                    <DeleteOfferDialog
                        offer={props.data}
                        hideDeleteOfferDialog={() => setDeleteOfferDialog(false)}
                    />
                    :
                    null
            }
        </div>
    )
}
