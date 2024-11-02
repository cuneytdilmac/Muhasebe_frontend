import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Controller, useForm } from 'react-hook-form';
import { ClientOption } from './NewOfferDialog';
import { classNames } from 'primereact/utils';
import Select, { Options } from 'react-select';
import { Individual } from '../clients/individuals/Individuals';
import {  useDispatch, useSelector } from 'react-redux';
import {  AppDispatch, RootState } from '../store/Store';
import { FormHelperText } from '@mui/material';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import { getAllClientsAction } from '../../slices/clientSlice';
import { Offer } from './Offers';

interface EditOfferDialogProps {
    offer: Offer;
    editOffer: (data:EditOfferDefaultData) => void;
    hideEditOfferDialog: () => void;
}

export interface EditOfferData {
    id: number;
    topic: string;
    amount: number;
    unitPrice: number;
    clientId: number;
}

export interface EditOfferDefaultData {
    id: number;
    topic: string;
    amount: string;
    unitPrice: string;
    client?: ClientOption;
}

export default function EditOfferDialog(props: EditOfferDialogProps) {
    const dispatch: AppDispatch = useDispatch();
    const defaultValues: EditOfferDefaultData = { id: props.offer.id, topic: props.offer.topic, amount: String(props.offer.amount), unitPrice: String(props.offer.unitPrice), client: { label: props.offer.client.name, value: props.offer.client.id } };
    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues });

    const allClients = useSelector((state: RootState) => state.clients.allClients);

    const clientOptions: Options<any> = allClients?.map((data: Individual) => ({
        label: data.name,
        value: data.id
    }));

    // Yaşamsal Döngü LifeCycle Hook
    // useEffect hook'u Bu component render (oluşturulduğunda) edildiğinde ilk çalışan yer useEffect içerisidir.
    useEffect(() => {
        getAllClientsAction(dispatch);
    }, []);

    const header = (<h3 style={{ display: "flex", justifyContent: "center" }}>Teklifi Güncelle</h3>);

    const footer = (
        <>
            <Button label='İptal' icon="pi pi-times" className='mt-3 p-button-text' onClick={props.hideEditOfferDialog} />
            <Button type='submit' label='Kaydet' icon="pi pi-check" className='mt-3' onClick={handleSubmit(props.editOffer)} />
        </>
    )

    return (

        <Dialog header={header} visible={true}
            footer={footer}
            style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '640px': '100vw' }} onHide={props.hideEditOfferDialog}>
            <div className='form-demo'>
                <div className='flex justify-content-center'>
                    <div>
                        <form onSubmit={handleSubmit(props.editOffer)} className='p-fluid'>
                            <div className='field' style={{ margin: 20 }}>
                                <label htmlFor="client" className={classNames({ 'p-error': errors.client })}>Şahıs Adı*</label>
                                <span className='p-float-label'>
                                    <Controller
                                        name='client'
                                        control={control}
                                        rules={{ required: 'Şahıs Adı boş geçilemez.' }}
                                        render={({ field, fieldState }) => (
                                            <Select
                                                {...field}
                                                placeholder=''
                                                id={field.name}
                                                autoFocus
                                                className={classNames('select', {
                                                    'p-filled': field.value,
                                                    'p-invalid': fieldState.invalid
                                                })}
                                                options={clientOptions}
                                                hideSelectedOptions={false}
                                                noOptionsMessage={() => "Seçenek Yok"}
                                                isClearable={true}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 662626 }) }}
                                                menuPortalTarget={document.body}
                                            />
                                        )}
                                    />
                                </span>
                                <FormHelperText error={Boolean(errors.client)}>
                                    {errors.client?.message}
                                </FormHelperText>
                            </div>

                            <div className='field' style={{ margin: 20 }}>
                                <span className='p-float-label'>
                                    <Controller name='topic' control={control}
                                        rules={{ required: 'Konu boş geçilemez.' }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} autoFocus
                                                className={classNames({ 'p-invalid': fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="topic" className={classNames({ 'p-error': errors.topic })}>Konu*</label>
                                </span>
                                <FormHelperText error={Boolean(errors.topic)}>
                                    {errors.topic?.message}
                                </FormHelperText>
                            </div>

                            <div className='field' style={{ margin: 20 }}>
                                <span className='p-float-label'>
                                    <Controller name="amount" control={control}
                                        rules={{ required: 'Miktar boş geçilemez.' }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} min={0} type='number'
                                                className={classNames({ 'p-invalid': fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="amount" className={classNames({ 'p-error': errors.amount })}>Miktar*</label>
                                </span>
                                <FormHelperText error={Boolean(errors.amount)}>
                                    {errors.amount?.message}
                                </FormHelperText>
                            </div>

                            <div className='field' style={{ margin: 20 }}>
                                <span className='p-float-label'>
                                    <Controller name="unitPrice" control={control}
                                        rules={{ required: 'Birim Fiyatı boş geçilemez.' }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} min={0} type='number'
                                                className={classNames({ 'p-invalid': fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="unitPrice" className={classNames({ 'p-error': errors.unitPrice })}>Birim Fiyatı*</label>
                                </span>
                                <FormHelperText error={Boolean(errors.unitPrice)}>
                                    {errors.unitPrice?.message}
                                </FormHelperText>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Dialog>


    )
}
