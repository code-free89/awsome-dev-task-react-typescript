import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/redux";
import { getCardInfo, updateCardInfo } from "./actions";
import { ICardState, ICardResponse } from "./types";

const PREFIX = "card";

const initialState: ICardState = {
  status: STATUSES.INITIAL,
  data: null,
  error: ""
};

const isPendingAction = (action: Action) =>
  action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
  action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const cardSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getCardInfo.fulfilled.type,
        (state: ICardState, action: PayloadAction<ICardResponse>) => {
          state.status = STATUSES.FULFILLED;
          if (action.payload.status === 'success') {
            state.data = action.payload.data;
            state.error = "";
          }
          else {
            state.error = action.payload.error ?? "";
          }
        }
      )
      .addCase(
        updateCardInfo.fulfilled.type,
        (state: ICardState, action: PayloadAction<ICardResponse>) => {
          state.status = STATUSES.FULFILLED;
          if (action.payload.status === 'success') {
            state.data = action.payload.data;
            state.error = "";
          }
          else {
            state.error = action.payload.error ?? "";
          }
        }
      )
      .addMatcher(isPendingAction, (state: ICardState) => {
        state.status = STATUSES.PENDING;
      })
      .addMatcher(isRejectionAction, (state: ICardState) => {
        state.status = STATUSES.REJECTED;
      })
  }
});

export default cardSlice.reducer;