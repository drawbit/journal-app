import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

import Rating from '../Rating';
import Button from '../Button';
import Typography from '../Typography';

import {
  FeelingCardWrapper,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDate,
  CardInput,
  Divider,
} from './FeelingCard.style';
import { Props } from './types';
import { ColorType } from '../Button/types';
import { CardData, RateType } from '../../types/app';

import { getDateString } from '../../helpers/datetimeHelper';

const FeelingCard = React.memo(
  (props: Props): JSX.Element => {
    const {
      rate,
      description = '',
      savedDate,
      datetime = new Date(),
      onChooseRate = () => {},
      onSave = () => {},
    } = props;

    const [rateValue, setRateValue] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
      setRateValue(rate as number);
      setText(description);
    }, [rate, description]);

    const hasSavedData = !!description;
    const dateString = getDateString(datetime);
    const colors: ColorType[] = [
      'col1',
      'col1',
      'col2',
      'col3',
      'col2',
      'col5',
    ];
    const btnColor: ColorType = colors[rateValue || 0];

    const handleChooseRate = useCallback(
      (value: number) => {
        if (!hasSavedData) {
          setRateValue(value);
          onChooseRate(value as RateType);
        }
      },
      [onChooseRate, hasSavedData],
    );

    const handleSave = () => {
      const data: CardData = {
        rate: rateValue as RateType,
        description: text,
        datetime,
        savedDate: new Date(),
      };

      onSave(data);
    };

    const handleChangeText = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setText(e.target.value);
    };

    const renderContent = () => {
      if (hasSavedData) {
        return (
          <Typography variant="h2" color="normal">
            {description}
          </Typography>
        );
      }
      return (
        <CardInput
          placeholder="What made you feel that way?"
          value={text}
          onChange={handleChangeText}
          multiline
        />
      );
    };

    const renderFooterData = () => {
      if (savedDate) {
        return (
          <CardDate>
            Saved on {getDateString(savedDate)} at{' '}
            {moment(savedDate).format('hh:mm a')}
          </CardDate>
        );
      }
      if (text) {
        return <Button color={btnColor} title="Save" onClick={handleSave} />;
      }
      return null;
    };

    return (
      <FeelingCardWrapper>
        <CardHeader>
          <CardTitle>How are you feeling today?</CardTitle>
          <Rating rate={rateValue as RateType} onSelect={handleChooseRate} />
        </CardHeader>
        <CardContent>{renderContent()}</CardContent>
        <Divider />
        <CardFooter>
          <CardDate>{dateString}</CardDate>
          {renderFooterData()}
        </CardFooter>
      </FeelingCardWrapper>
    );
  },
);

export default FeelingCard;
