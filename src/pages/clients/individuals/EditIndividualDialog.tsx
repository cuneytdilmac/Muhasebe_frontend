import { Dialog } from "primereact/dialog";
import { Individual } from "./Individuals"
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FormHelperText } from "@mui/material";

interface EditIndividualDialogProps {
    data: Individual;
    hideEditIndividualDialog: () => void;
    onSubmit: (individual: Individual) => void;
}

export const EditIndividualDialog = (props: EditIndividualDialogProps) => {
    const defaultValues: Individual = {
        id: props.data.id,
        name: props.data.name,
        phoneNumber: props.data.phoneNumber,
    };

    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues });

    const onSubmit = (data: Individual) => {
        props.onSubmit(data);
        props.hideEditIndividualDialog();
    }

    const editIndividualDialogHeader = (
        <h3 style={{
            display: "flex",
            justifyContent: "center",
        }}>Şahıs Düzenle</h3>
    )

    const editIndividualDialogFooter = (
        <div>
            <Button label="İptal" icon="pi pi-times" className="mt-3"
                onClick={props.hideEditIndividualDialog}
            />
            <Button label="Kaydet" icon="pi pi-check" className="mt-3"
                onClick={handleSubmit(onSubmit)}
            />
        </div>
    )

    return (
        <Dialog header={editIndividualDialogHeader}
            breakpoints={{ '960px': '75vw', '640px': '100vw' }} 
            style={{ width: '50vw' }}
            footer={editIndividualDialogFooter}
            visible={true}
            onHide={() => props.hideEditIndividualDialog()}
        >

            <div className="form-demo">
                <form onSubmit={handleSubmit(props.onSubmit)} className='p-fluid'>
                    <div className='field' style={{ margin: 30 }}>
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

                    <div className='field' style={{ margin: 30 }}>
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
        </Dialog>
    )
}
