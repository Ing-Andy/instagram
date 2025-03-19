import { Compass, FilmIcon, HeartIcon, HomeIcon, MessageCircle, PlusSquare, Search } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.css';

export default function Aside() {
  return (
    <div className='Aside'>
      <h1>Instagram</h1>
      <ul className='AsideListe'>
        <li>
          <HomeIcon />
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Accueil
          </NavLink>
        </li>
        <li>
          <Search />
          <NavLink to="/recherche" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Recherche
          </NavLink>
        </li>
        <li>
          <Compass />
          <NavLink to="/decouvrir" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Découvrir
          </NavLink>
        </li>
        <li>
          <FilmIcon />
          <NavLink to="/reels" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Reels
          </NavLink>
        </li>
        <li>
          <MessageCircle />
          <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Messages
          </NavLink>
        </li>
        <li>
          <HeartIcon />
          <NavLink to="/notifications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Notifications
          </NavLink>
        </li>
        <li>
          <PlusSquare />
          <NavLink to="/creer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Créer
          </NavLink>
        </li>
        <li>
          <HomeIcon />
          <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Profil
          </NavLink>
        </li>
        <li>
          <HomeIcon />
          <NavLink to="/plus" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Plus
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
