import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../api/EndPoints";
import { AddOfferDTO } from "../pages/offers/NewOfferDialog";
import { EditOfferData } from "../pages/offers/EditOfferDialog";

export const offerSlice = createSlice({
    name: 'offers',
    initialState: {
        allOffers: [] as Array<any>,
        numberOfOffers: 0
    },
    reducers: {
        getOffers: (state, action) => {
            state.allOffers = action.payload;
        },
        getNumberOfOffers: (state, action) => {
            state.numberOfOffers = action.payload;
        },
    },
});

export const getAllOffersAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.offers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getOffers(data));
    } catch (error) {
        console.error("Error");
    }
};

export const addOfferAction = async (dto: AddOfferDTO, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.addOffer}`, {
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

export const updateOfferAction = async (dto: EditOfferData, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.updateOffer}`, {
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

export const deleteOfferAction = async (id: number, callback?: () => void) => {
    try {
        const response = await fetch(`${EndPoints.deleteOffer}/${id}`, {
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

export const getNumberOfOffersAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.numberOfOffers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getNumberOfOffers(data));
    } catch (error) {
        console.error("Error");
    }
}

export const { getOffers, getNumberOfOffers } = offerSlice.actions;

export default offerSlice.reducer;