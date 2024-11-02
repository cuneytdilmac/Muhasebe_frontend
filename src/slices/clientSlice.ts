import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../api/EndPoints";
import { AddIndividualData } from "../pages/clients/individuals/NewIndividualDialog";
import { Individual } from "../pages/clients/individuals/Individuals";

export const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        allClients: [] as Array<any>,
        numberOfClients: 0
    },
    reducers: {
        getClients: (state, action) => {
            state.allClients = action.payload;
        },
        getNumberOfClients: (state, action) => {
            state.numberOfClients = action.payload;
        },
    },
});

export const getAllClientsAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.clients}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getClients(data));
    } catch (error) {
        console.error("Error");
    }
}

export const addClientAction = async (dto: AddIndividualData, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.addClient}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dto)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (callback) {
            callback();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const updateClientAction = async (dto: Individual, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.updateClient}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dto)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (callback) {
            callback();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const deleteClientAction = async (id: number, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.deleteClient}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (callback) {
            callback();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getNumberOfClientsAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.numberOfClients}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getNumberOfClients(data));
    } catch (error) {
        console.error("Error");
    }
}

export const { getClients, getNumberOfClients } = clientSlice.actions;

export default clientSlice.reducer;