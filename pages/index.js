'use client';
import {  Navbar } from '../components'
import { Hero, Tokenomics, About, Community, VPresale} from '../sections';
const Home = () => {
  return (

    <div className='background overflow-hidden'>
      <Navbar />
      <Hero />  
      <About />
      <VPresale />
      <div className='bg-rocket'>
      <Tokenomics />
      <Community />
      </div>
     
    </div>
  );
}

export default Home;
