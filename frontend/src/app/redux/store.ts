import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../types/InitialState";
import { User } from "../types/user";
import { useDispatch, useSelector } from "react-redux";

const initialState: InitialState = {
    user: { id: "", email: "", password: "" }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, { payload }: PayloadAction<User>) => {
                state.user.id,
                state.user.email,
                state.user.password
        },
        resetUser: (state, { payload }: PayloadAction<string>) => {
            state.user = { id: "", email: "", password: "" };
        }
    }
});

export const { addUser, resetUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();