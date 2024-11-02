import { Dialog, Button, DialogTitle, DialogContentText, DialogActions } from "@mui/material"
import { useState } from "react";
import { Individual } from "./Individuals";

// DeleteIndividualDialogProps adında bir interface yaptık.
interface DeleteIndividualDialogProps {
    data: Individual;
    hideDeleteIndividualDialog: () => void;
    onSubmit: (id: number) => void;
}

export const DeleteIndividualDialog = (props: DeleteIndividualDialogProps) => {
    const [data] = useState(props);

    const onSubmit = () => {
        props.onSubmit(data.data.id);
        props.hideDeleteIndividualDialog();
    }

    return (
        <Dialog
            open={true}
            keepMounted
            onClose={data.hideDeleteIndividualDialog}
            aria-describedby='alert-dialog-slide-description'
        >
            <DialogTitle style={{
                paddingLeft: 10,
                display: "flex",
                justifyContent: "center"
            }}>Şahsı Sil</DialogTitle>
            <DialogContentText style={{ margin: "0px 10px 10px 10px" }} id='alert-dialog-slide-description'>{props.data.name} Kişisini Silmek İstediğinize Emin Misiniz?</DialogContentText>
            <DialogActions>
                <Button onClick={data.hideDeleteIndividualDialog}>Hayır</Button>
                <Button onClick={onSubmit}>Evet</Button>
            </DialogActions>
        </Dialog>
    )
}
