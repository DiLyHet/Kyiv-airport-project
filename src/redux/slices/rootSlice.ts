import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentFormattedDate } from '../../functions';
import { Airport } from "../../types/airports";

export type Type = {
  type: "DEPARTURE" | "ARRIVAL" | "";
  date: string;
  data: Airport[];
};

const initialState: Type = {
  type: "",
  date: getCurrentFormattedDate(),
  data: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setTypeAction: (state, action: PayloadAction<Type["type"]>) => {state.type = action.payload},
    setDateAction: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setDataAction: (state, action: PayloadAction<Airport[]>) => {state.data = action.payload}
  },
});

export const { setTypeAction, setDateAction, setDataAction } = rootSlice.actions;
export default rootSlice.reducer;