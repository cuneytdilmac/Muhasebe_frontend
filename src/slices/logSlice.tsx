import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../api/EndPoints";

export const logSlice = createSlice({
    name: 'logs',
    initialState: {
        allLogs: [] as Array<any>,
        numberOfLogs: 0
    },
    reducers: {
        getLogs: (state, action) => {
            state.allLogs = action.payload;
        },
        getNumberOfLogs: (state, action) => {
            state.numberOfLogs = action.payload;
        },
    },
});

export const getAllLogsAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.logs}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getLogs(data));
    } catch (error) {
        console.error("Error");
    }
}

export const getNumberOfLogsAction = async (dispatch: any) => {
    try {
        const response = await fetch(`${EndPoints.numberOfLogs}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        dispatch(getNumberOfLogs(data));
    } catch (error) {
        console.error("Error");
    }
}

export const { getLogs, getNumberOfLogs } = logSlice.actions;

export default logSlice.reducer;
