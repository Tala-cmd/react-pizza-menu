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
    photoName: "pizzas/spinaci.jpg",
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
  return (
    <main className="menu">
        <h2>Our Menu</h2>
        <Pizza
          name="Spinach Pizza"
          ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
          photoName="pizzas/spinach.jpg"
          price={10}
        />

        <Pizza
          name="Funghi Pizza"
          ingredients="Tomato, mushrooms"
          price={12}
          photoName="pizzas/funghi.jpg"
        />
    </main>
  );
}

export function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
        </div>
    </div>
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
  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    const updateIsOpen = () => {
        const hour = new Date().getHours();
        const openHour = 12; //opens at 12 morning
        const closeHour = 21; //closes at 10 night
        console.log(hour);

        if (hour >= openHour && hour <= closeHour) {
          setIsOpen("open");
        } else {
          setIsOpen("closed");
        }
    };

    updateIsOpen(); // Call the function once when the component mounts

    // Optionally, you can clear any timers or subscriptions in the cleanup function
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <footer className="footer">
        <h1>The restaurant is now {isOpen}</h1>
        <footer>{new Date().toLocaleTimeString()} </footer>
    </footer>
  );
}
