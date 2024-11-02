import { FormHelperText, Input } from "@mui/material";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";
import { getAllClientsAction } from "../../slices/clientSlice";
import Select, { Options } from 'react-select';
import { Individual } from "../clients/individuals/Individuals";

interface NewOfferDialogProps {
    addOffer: (data: AddOfferData) => void;
    hideNewOfferDialog: () => void;
}

export interface AddOfferData {
    topic: string;
    amount: string;
    unitPrice: string;
    client?: ClientOption;
}

export interface AddOfferDTO {
    topic: string;
    amount: number;
    unitPrice: number;
    clientId: number;
}

export interface ClientOption {
    value: number;
    label: string;
}

export const NewOfferDialog = (props: NewOfferDialogProps) => {
    const dispatch: AppDispatch = useDispatch();
    const defaultValues: AddOfferData = { topic: '', amount: '', unitPrice: '', client: undefined };
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

    const header = (<h3 style={{ display: "flex", justifyContent: "center" }}>Teklif Oluştur</h3>);

    const footer = (
        <>
            <Button label='İptal' icon="pi pi-times" className='mt-3 p-button-text' onClick={props.hideNewOfferDialog} />
            <Button type='submit' label='Kaydet' icon="pi pi-check" className='mt-3' onClick={handleSubmit(props.addOffer)} />
        </>
    )

    return (
        <div className="card flex justify-content-center">
            <Dialog header={header} visible={true}
                footer={footer}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '640px': '100vw' }} onHide={props.hideNewOfferDialog}>

                <div className='form-demo'>
                    <div className='flex justify-content-center'>
                        <div>
                            <form onSubmit={handleSubmit(props.addOffer)} className='p-fluid'>
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
        </div>
    )
}
