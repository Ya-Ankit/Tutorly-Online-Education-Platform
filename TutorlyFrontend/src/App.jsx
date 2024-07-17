import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import QuotePage from './Components/QuotePage';
import SlidePage from './Components/SlidePage';
import Banner from './Components/Banner';
import ThreeBlock from './Components/ThreeBlock';
import Testimonial from './Components/Testimonial';
import About from './Components/About';
import BannerTwo from './Components/BannerTwo';
import FirstTutor from './Components/Firsttutor';
import TutorCards from './Components/TutorCards';
import Level from './Components/Level';
import Time from './Components/Time';
import Price from './Components/Price';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import person1 from './assets/person1.jpg';
import Cards from './Components/Cards';
import { HomePage } from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Findtutor } from './Components/Findtutor';
import Tutorabout from './Components/Tutorabout';

function App() {

  const tutorData = [
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    // Repeat the same data to generate 10 cards with the same info
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    // Repeat the same data to generate 10 cards with the same info
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    },
    {
      photo: person1,
      city: 'Bangalore',
      subject: 'Computer Science',
      name: 'Aryan',
      bio: "I'm 21 years old and I teach Computer Science.",
      rating: 5,
      price: 500
    }
  ];
  

  return (
    <>
       <Navbar/>
       {/* <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tutorData.map((tutor, index) => (
        <Cards key={index} tutor={tutor} />
      ))}
      </div> */}

       <Routes>

        <Route path = '/' element={<HomePage/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/Signup' element={<Signup/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/Findtutor' element={<Findtutor/>}/>


       </Routes>


    </>
  )
}

export default App
