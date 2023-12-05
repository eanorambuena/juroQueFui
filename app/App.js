import { load } from "emmy-dom";
import "./components/TextArea";
import "./components/Nav.js";
import "./Home.js";

const BASE = '/juroQueFui';

load(`${BASE}/About.html`, 'About');
load(`${BASE}/Contact.html`, 'Contact');
load(`${BASE}/Code404.html`, 'Code404');

function App () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full';

  return /*html*/`
    <Nav
      base="${BASE}"
      img="https://flowbite.com/docs/images/logo.svg"
      brand="Flowbite"
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Nav>
    <Router></Router> 
  `;
}

load(App, 'App');
