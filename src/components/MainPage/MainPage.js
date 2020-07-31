import React, { useEffect } from 'react';

import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import ErrorBoundry from '../ErrorBoundary/ErrorBoundary';

import './MainPage.css';

const MainPage = ({ robots, searchField, onRequestRobots, onSearchChange, isPending }) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filterRobots = () => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      {isPending ? <h1>Loading</h1> :
        <ErrorBoundry>
          <CardList robots={filterRobots()} />
        </ErrorBoundry>
      }
    </div>
  );
}

export default MainPage;