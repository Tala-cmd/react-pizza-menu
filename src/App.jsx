import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState, useEffect } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinach Pizza",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinach.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
  );
}

function Menu() {
  const pizzas= pizzaData;
  const numberOfPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numberOfPizzas > 0 ? 
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />))}
        </ul> : 
        <p>We're still working on our menu please come back later😊.</p>
      }
    </main>
  );
}

export function Pizza(props) {
  console.log(props);

  if(props.pizzaObject.soldOut) return null;


  return (
    <li className="pizza">
        <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
        <div>
          <h3>{props.pizzaObject.name}</h3>
          <p>{props.pizzaObject.ingredients}</p>
          <span>{props.pizzaObject.price}</span>
        </div>
    </li>
  );
}

function Header() {
  // const style = {color: 'red', fontSize: '32px', textTransform: 'uppercase'}
  const style = {};
  return (
    <header className="header">
        <h1 style={style} className="header">
          React Pizza Restaurant
        </h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const time = new Date().toLocaleTimeString()
  const openHour = 12; //opens at 12 morning
  const closeHour = 22; //closes at 10 night
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>We're open until {closeHour}:00. Come visit us or order online.</p> : 
        <p>We're happy to welcome you between {openHour}:00. and {closeHour}:00.</p>
        }
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
