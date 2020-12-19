import React, { useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import { times, get } from 'lodash';

import { CardListWrapper, CardListItem } from './CardList.style';
import { Props } from './types';
import { getDataIndex } from '../../helpers/datetimeHelper';
import { CardData } from '../../types/app';

const MAX_ITEMS = 30;

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  const { data = {}, selectedDate, onSelect = () => {} } = props;

  const [focused, setFocused] = useState(false);
  const scrollRef = useRef<Scrollbars>(null);

  useEffect(() => {
    scrollRef?.current?.scrollToRight();
  }, []);

  const handleSelectCard = (data: CardData) => {
    onSelect(data);
  };

  const renderItems = () => {
    return times(MAX_ITEMS).map((index: number) => {
      const itemIndex = MAX_ITEMS - index - 1;
      const date = moment().subtract(itemIndex, 'days');
      const offset = Math.abs(moment(selectedDate).diff(date, 'days'));
      const opacity = offset < 6 ? 0.9 - offset * 0.15 : 0.15;

      const dateObj = date.toDate();
      const dataIndex = getDataIndex(dateObj);

      const cardData: CardData = get(data, dataIndex, { datetime: dateObj });
      const rate = cardData?.rate ?? undefined;
      const description = cardData?.description ?? '';

      return (
        <CardListItem
          datetime={dateObj}
          description={description}
          rate={rate}
          opacity={focused ? 1 : opacity}
          onClick={() => handleSelectCard(cardData)}
          key={index}
        />
      );
    });
  };

  const handleFocusList = () => {
    setFocused(true);
  };

  const handleBlurList = () => {
    setFocused(false);
  };

  return (
    <Scrollbars
      ref={scrollRef}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{ height: 156, width: 'calc(100% - 30px)' }}
      onMouseEnter={handleFocusList}
      onMouseLeave={handleBlurList}
    >
      <CardListWrapper>{renderItems()}</CardListWrapper>
    </Scrollbars>
  );
};

export default CardList;
