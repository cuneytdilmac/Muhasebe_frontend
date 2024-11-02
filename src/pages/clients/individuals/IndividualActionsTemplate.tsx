import { useState } from "react";
import { IndividualActionOptions, individualActionOptions } from "./IndividualActionsData";
import { Individual } from "./Individuals"
import Select from 'react-select';
import { DeleteIndividualDialog } from "./DeleteIndividualDialog";
import { EditIndividualDialog } from "./EditIndividualDialog";
import { deleteClientAction, getAllClientsAction, updateClientAction } from "../../../slices/clientSlice";
import { useDispatch } from "react-redux";


interface IndividualActionsTemplateProps {
    data: Individual;
}

export const IndividualActionsTemplate = (props: IndividualActionsTemplateProps) => {
    const dispatch = useDispatch();
    const [deleteIndividualDialog, setDeleteIndividualDialog] = useState(false);
    const [editIndividualDialog, setEditIndividualDialog] = useState(false);

    const onChange = (selectedOption: IndividualActionOptions) => {
        if (selectedOption.value === "edit") {
            openEditIndividualDialog();
        } else if (selectedOption.value === "delete") {
            openDeleteIndividualDialog();
        }
    }

    const hideEditIndividualDialog = () => setEditIndividualDialog(false);
    const hideDeleteIndividualDialog = () => setDeleteIndividualDialog(false);
    const openEditIndividualDialog = () => setEditIndividualDialog(true);
    const openDeleteIndividualDialog = () => setDeleteIndividualDialog(true);

    const deleteIndividual = (id: number) => deleteClientAction(id, () => getAllClientsAction(dispatch));

    const editIndividual = (individual: Individual) => updateClientAction(individual, () => getAllClientsAction(dispatch));

    return (
        <div>
            <Select
                value={[]}
                placeholder="İşlem Seç"
                options={individualActionOptions as any}
                onChange={(opt: any) => onChange(opt)}
                menuPortalTarget={document.body}
            />
            {
                deleteIndividualDialog &&
                <DeleteIndividualDialog
                    data={props.data}
                    hideDeleteIndividualDialog={hideDeleteIndividualDialog}
                    onSubmit={deleteIndividual}
                />
            }
            {
                editIndividualDialog &&
                <EditIndividualDialog
                    data={props.data}
                    hideEditIndividualDialog={hideEditIndividualDialog}
                    onSubmit={editIndividual}
                />
            }
        </div>
    )
}