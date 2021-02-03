import React, {Component} from 'react';

import Aux from '../components/js/HOC/aux';
import Navbar from '../components/js/navbar';

import Landing from "../components/js/home/landing";
import Skills from '../components/js/home/skills';
import Description from '../components/js/home/description';
import Projects from '../components/js/home/projects';
import ContactMe from '../components/js/home/contact-me';

const Home = ({items, ...props}) => {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

    setFilteredItems(matchingItems)
  }

  return (
    <>
        <div className='home-container'>
        <Navbar></Navbar>
        {/* <img src={pattern1} alt="" className="home__img"/> */}
        <Landing></Landing>
        <Skills></Skills>
        <Description></Description>
        {/* <Projects></Projects>
        <ContactMe></ContactMe> */}
        </div>
    </>
  );
};

const listContainer = () => (
  <List area-lable='My fancy list' items={['Learn React', 'Learn Next.JS', 'Freelance', '$$$']}></List>
);

export default Home;