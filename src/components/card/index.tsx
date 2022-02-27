import React, { useState } from 'react';
import logo from './../../logo.svg';
import './card.css';
import TextInput from '../common/text-input';
import Button from '../common/button';
import { updateCardInfo } from '../../store/card/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorText } from '../../store/card/selectors';

type Props = {
  cardID: string;
  data: ICard;
}

const Card: React.FC<Props> = ({ cardID, data }) => {

  const [price, setPrice] = useState<number>(data.currentPrice);
  const dispatch = useDispatch();
  const errorText = useSelector(selectErrorText);

  return (
    <div className={"h-container card-wrapper"}>
      <div className={"cardImage"}>
        <img alt={'card'} src={data.image || logo} width={100} height={100} />
      </div>
      <div className={"ml-4 v-container"}>
        <TextInput
          name="name"
          label="Name"
          placeholder="Card Name"
          className="mb-4"
          disabled
          value={data.name}
        />
        <TextInput
          name="name"
          label="Description"
          placeholder="Card Description"
          className="mb-4"
          disabled
          value={data.description}
        />
        <TextInput
          name="name"
          label="Price"
          placeholder="Card Price"
          className="mb-4"
          value={price.toString()}
          error={errorText}
          onChangeValue={(value: string) => setPrice(Number(value))}
        />
        <Button
          className="mt-4"
          type="submit"
          text="Rent Card"
          onClick={() => {
            dispatch(updateCardInfo({ cardID, cardPrice: price }));
          }}
        />
      </div>
    </div>
  )
}

export default Card
