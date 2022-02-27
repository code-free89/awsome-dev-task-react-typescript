import React, { useEffect } from 'react';
import Card from '../../components/card';
import { useDispatch, useSelector } from "react-redux";
import { selectCardData, selectCardStatus } from '../../store/card/selectors';
import { getCardInfo } from '../../store/card/actions';
import { STATUSES } from '../../constants/redux';
import { useParams } from "react-router";

type IParams = {
  cardId: string;
}

const CardPage: React.FC = () => {

  const dispatch = useDispatch();
  const cardData = useSelector(selectCardData);
  const isLoadingCard = useSelector(selectCardStatus) !== STATUSES.FULFILLED;
  const params = useParams<IParams>();

  useEffect(() => {
    if (!cardData) dispatch(getCardInfo(params.cardId ?? ""));
  }, []);

  if (isLoadingCard)
    return (
      <div className="">
        Loading CardData
      </div>
    )

  return (
    <div className="mt-4 ml-4">
      <Card cardID={params.cardId ?? ""} data={cardData ?? { image: '', name: '', description: '', currentPrice: 0 }} />
    </div>
  )
}

export default CardPage
