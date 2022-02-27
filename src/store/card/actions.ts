import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCardInfoAPI, updateCardInfoAPI } from "../../api/card";
import { AxiosResponse } from 'axios';
import { ICardResponse, ICardUpdateInfo } from "./types";

const getCardInfo = createAsyncThunk(
  "card/info",
  async (cardID: string, _) => {
    try {
      const response: AxiosResponse<any> = await getCardInfoAPI(cardID) as AxiosResponse<any>;
      const getResponse: ICardResponse = {
        status: 'success',
        data: response.data.card
      }
      return getResponse;
    } catch (error: any) {
      const getResponse: ICardResponse = {
        status: 'success',
        data: error.response.data.error
      }
      return getResponse;
    }
  }
);

const updateCardInfo = createAsyncThunk(
  "card/update",
  async (cardData: ICardUpdateInfo, _) => {
    try {
      const response: AxiosResponse<any> = await updateCardInfoAPI(cardData.cardID, cardData.cardPrice) as AxiosResponse<any>;
      const updateResponse: ICardResponse = {
        status: 'success',
        data: response.data.card
      };
      return updateResponse;
    } catch (error: any) {
      const updateResponse: ICardResponse = {
        status: 'error',
        data: null,
        error: error.response.data.error
      }
      return updateResponse;
    }
  }
)

export { getCardInfo, updateCardInfo };