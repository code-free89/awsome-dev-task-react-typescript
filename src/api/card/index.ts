import axios from 'axios';
import { API_URL } from '../config';

const PREFIX = "card";

const getCardInfoAPI = async (cardID: string) => {
  return await axios.get(`${API_URL}/${PREFIX}/${cardID}`);
}

const updateCardInfoAPI = async (cardID: string, cardPrice: number) => {
  return await axios.post(`${API_URL}/${PREFIX}/${cardID}`, { rentAmount: cardPrice });
}

export { getCardInfoAPI, updateCardInfoAPI };