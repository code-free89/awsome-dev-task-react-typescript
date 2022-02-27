interface ICardState {
  status: number;
  data: ICard | null;
  error: string;
}

interface ICardUpdateInfo {
  cardID: string;
  cardPrice: number;
}

interface ICardResponse {
  status: 'success' | 'error';
  data: ICard | null;
  error?: string;
}

export type { ICardState, ICardUpdateInfo, ICardResponse };