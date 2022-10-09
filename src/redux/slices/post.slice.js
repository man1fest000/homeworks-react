import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    postFromAPI: null,
};

const getAll = createAsyncThunk("postSlice/getAll", async (_, { rejectedWithValue }) => {
    try {
        const { data } = await postService.getAll();
        return data;
    } catch (e) {
        return rejectedWithValue(e.response.data);
    }
});

const getById = createAsyncThunk("postSlice/getById", async ({ id }, { rejectedWithValue }) => {
    try {
        const { data } = await postService.getById(id);
        return data;
    } catch (e) {
        return rejectedWithValue(e.response.data);
    }
});

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        },
        deletePostById: (state, action) => {
            const index = state.posts.findIndex((post) => post.id === action.payload);
            state.posts.splice(index, 1);
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state,action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state,action)=>{
                state.loading = true
            })
            .addCase(getById.fulfilled, (state,action)=>{
                state.postFromAPI = action.payload
            } )
});

const {
    reducer: postReducer,
    actions: { setCurrentPost, deletePostById },
} = postSlice;

const postActions = {
    setCurrentPost,
    deletePostById,
    getAll,
    getById
}

export {postReducer, postActions}