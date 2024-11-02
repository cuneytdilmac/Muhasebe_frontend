
import { Button } from 'primereact/button';
import { FormHelperText } from "@mui/material";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Controller, useForm } from 'react-hook-form';

interface NewIndividualDialogProps {
    addIndividual: (data: AddIndividualData) => void;
    hideNewIndividualDialog: () => void;
}

export interface AddIndividualData {
    name: string;
    phoneNumber: string;
}

export const NewIndividualDialog = (props: NewIndividualDialogProps) => {
    const defaultValues: AddIndividualData = { name: '', phoneNumber: '' };
    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues });

    const renderNewIndividualDialogHeader = (
        <h3 style={{
            marginBottom: 0, display: "flex", justifyContent: "center"
        }}>Şahıs Oluştur</h3>
    )

    const renderNewIndividualDialogFooter = (
        <>
            <Button label='İptal' icon="pi pi-times" className='mt-3 p-button-text' onClick={props.hideNewIndividualDialog} />
            <Button label='Kaydet' icon="pi pi-check" className='mt-3' onClick={handleSubmit(props.addIndividual)} />
        </>
    )

    return (
        <Dialog header={renderNewIndividualDialogHeader} visible={true} style={{ width: '50vw' }} onHide={() => props.hideNewIndividualDialog()}
            footer={renderNewIndividualDialogFooter}
        >
            <div className='form-demo'>
                <div className='flex justify-content-center'>
                    <div>
                        <form onSubmit={handleSubmit(props.addIndividual)} className='p-fluid'>

                            <div className='field' style={{ margin: 20 }}>
                                <span className='p-float-label'>
                                    <Controller name='name' control={control}
                                        rules={{ required: 'Şahıs Adı boş geçilemez.' }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} autoFocus
                                                className={classNames({ 'p-invalid': fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Şahıs Adı*</label>
                                </span>
                                <FormHelperText error={Boolean(errors.name)}>
                                    {errors.name?.message}
                                </FormHelperText>
                            </div>

                            <div className='field' style={{ margin: 20 }}>
                                <span className='p-float-label'>
                                    <Controller name="phoneNumber" control={control}
                                        rules={{
                                            required: 'Telefon Numarası boş geçilemez.',
                                            minLength: {
                                                value: 10,
                                                message: 'Telefon Numarası en az 10 karekter olmalı.'
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: 'Telefon Numarası en fazla 15 karekter olmalı.'
                                            }
                                        }}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} min={0} type='number'
                                                className={classNames({ 'p-invalid': fieldState.invalid })}
                                            />
                                        )}
                                    />
                                    <label htmlFor="phoneNumber" className={classNames({ 'p-error': errors.phoneNumber })}>Telefon*</label>
                                </span>
                                <FormHelperText error={Boolean(errors.phoneNumber)}>
                                    {errors.phoneNumber?.message}
                                </FormHelperText>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}