import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentFormattedDate } from '../../utils';
import { Airport } from "../../types/airports";

export type Type = {
  type: "DEPARTURE" | "ARRIVAL" | "";
  date: string;
  data: Airport[];
  inputValue: string;
  inputSearchArray: Airport[];
};

const initialState: Type = {
  type: "",
  date: getCurrentFormattedDate(),
  data: [],
  inputValue: "",
  inputSearchArray: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setTypeAction: (state, action: PayloadAction<Type["type"]>) => {state.type = action.payload},
    setDateAction: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setDataAction: (state, action: PayloadAction<Airport[]>) => {state.data = action.payload},
    setInputValueAction: (state, action: PayloadAction<string>) => {state.inputValue = action.payload},
    setInputSearchArrayAction: (state, action: PayloadAction<Airport[]>) => {state.inputSearchArray = action.payload},
  },
});

export const { setTypeAction, setDateAction, setDataAction, setInputValueAction, setInputSearchArrayAction } = rootSlice.actions;
export default rootSlice.reducer;