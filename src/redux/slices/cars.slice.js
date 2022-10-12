import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carsService } from "../../services";

const initialState = {
    cars: [],
    currentCar: null,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk("carsSlice/getAll", async (_, { rejectWithValue }) => {
    try {
        const { data } = await carsService.getAll();
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

//create car
const create = createAsyncThunk("carsSlice/create", async (car, { rejectWithValue }) => {
    try {
        const { data } = await carsService.create(car);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const deleteById = createAsyncThunk("carsSlice/deleteById", async (id, { rejectWithValue }) => {
    try {
        const { data } = await carsService.deleteById(id);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const updateById = createAsyncThunk("carsSlice/updateById", async (car, { rejectWithValue }) => {
    try {
        const { data } = await carsService.updateById(car.id, car);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const carsSlice = createSlice({
    name: "carsSlice",
    initialState,

    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.loading = false;
            })
            .addCase(create.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(create.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.cars = state.cars.filter((car) => car.id !== action.payload);
                state.loading = false;
            })
            .addCase(deleteById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateById.fulfilled, (state, action) => {
                state.cars = state.cars.map((car) => (car.id === action.payload.id ? action.payload : car));
                state.loading = false;
            })
            .addCase(updateById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(updateById.pending, (state, action) => {
                state.loading = true;
            }),
});

const { reducer: carReducer } = carsSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
};

export { carReducer, carActions };
