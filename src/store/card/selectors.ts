import type { RootState } from "../../store";

export const selectCardData = (state: RootState) => state.card.data;

export const selectCardStatus = (state: RootState) => state.card.status;

export const selectErrorText = (state: RootState) => state.card.error;