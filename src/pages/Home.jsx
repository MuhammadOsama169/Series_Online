import React, { useState } from 'react';
import { MovieListing } from '../components/MovieListing';
import { SeriesListing } from '../components/SeriesListing';
import { MovieList } from '../components/MoviesList';
import { Header } from '../components/Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Sidebar from '../components/SideBar';

const style = {
  color: 'white',
};

export const Home = () => {
  const [tabvalue, setTabValue] = React.useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleTabsChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        {isOpen === true ? <Sidebar /> : <></>}
        <main className={isOpen ? 'ml-64' : 'ml-0'}>
          <MovieListing />

          <div className="w-full text-left py-10 px-12">
            <h1 className="text-[25px] text-white font-opensans">Trending</h1>
          </div>
          <Tabs
            className="px-10"
            onChange={handleTabsChange}
            value={tabvalue}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#00FF00',
              },
            }}
          >
            <Tab label="Movies" sx={style}></Tab>
            <Tab label="TV Series" sx={style}></Tab>
          </Tabs>
          {tabvalue === 0 && <MovieList />}
          {tabvalue === 1 && <SeriesListing />}
        </main>
      </div>
    </>
  );
};
