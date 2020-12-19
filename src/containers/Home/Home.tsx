import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CardData, CardDataObj, RateType } from '../../types/app';
import { RootState } from '../../redux/store';
import * as appActions from '../../redux/app/actions';

import { HomeWrapper, Content } from './Home.style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeelingCard from '../../components/FeelingCard';
import CardList from '../../components/CardList';

const Home: React.FC = (): JSX.Element => {
  const [bg, setBg] = useState(0);
  const dispatch = useDispatch();

  const cardData: CardDataObj = useSelector(
    (state: RootState) => state.App.data,
  );
  const curData: CardData = useSelector(
    (state: RootState) => state.App.curData,
  );

  useEffect(() => {
    setBg(curData?.rate ?? 0);
  }, [curData]);

  const handleChooseRate = useCallback(
    (rate: RateType) => {
      setBg(rate);
    },
    [setBg],
  );

  const handleSaveData = (data: CardData) => {
    dispatch(appActions.saveData(data));
  };

  const handleSelectCard = (data: CardData) => {
    dispatch(appActions.setCurData(data));
  };

  return (
    <HomeWrapper background={bg}>
      <Header logo="Simple Journal" />
      <Content>
        <FeelingCard
          onChooseRate={handleChooseRate}
          onSave={handleSaveData}
          rate={curData?.rate}
          description={curData?.description}
          savedDate={curData?.savedDate}
          datetime={curData?.datetime}
        />
        <CardList
          data={cardData}
          selectedDate={curData?.datetime}
          onSelect={handleSelectCard}
        />
      </Content>
      <Footer datetime={curData?.datetime} />
    </HomeWrapper>
  );
};

export default Home;
