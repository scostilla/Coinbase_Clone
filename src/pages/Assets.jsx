import {
  ChartPortfolio,
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabTrade,
  TableAssets,
  TableYourAssets,
} from '../components';

import { AssetsContext } from '../contexts/AssetsContext';
import { useContext } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
  
  import ContactUs from './ContactUs';

const Assets = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const { yourCoins, coinsOnWatchlist } = useContext(AssetsContext);

  return (
    <>
      <ContentCenter>
        <Section>
          <ChartPortfolio assets={yourCoins} />
        </Section>
        <Section>
          <SectionTitle title='Your Assets' />
          <TableYourAssets assets={yourCoins} />
        </Section>
        <Section>
          <SectionTitle title='Watchlist' />
          <TableAssets assets={coinsOnWatchlist} />
        </Section>
        <Section>
          <SectionTitle title='Contact Us' />
          <ContactUs />
        </Section>
      </ContentCenter>
      {isWidthMin1150 && (
        <ContentRight>
          <Section>
            <TabTrade />
          </Section>
        </ContentRight>
      )}
    </>
  );
};

export default Assets;
