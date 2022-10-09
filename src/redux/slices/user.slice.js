import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromAPI: null,
};

const getAll = createAsyncThunk("userSlice/getAll", async (_, { rejectWithValue }) => {
    try {
        const { data } = await userService.getAll();
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const getById = createAsyncThunk("userSlice/getById", async ({ id }, { rejectWithValue }) => {
    try {
        const { data } = await userService.getById(id);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        deleteUserById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1);
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromAPI = action.payload;
            }),

});

const {
    reducer: userReducer,
    actions: { setCurrentUser, deleteUserById },
} = userSlice;

const userActions = {
    getAll,
    setCurrentUser,
    getById,
    deleteUserById,
};


export { userReducer, userActions };
