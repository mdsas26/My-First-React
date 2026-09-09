// main.tsx React application-কে HTML-এর root element-এর সঙ্গে connect করে এবং সেখানে App component render করে।
// main.tsx সাধারণত শুধু React application-কে শুরু করে। তারপর App পুরো application-এর component tree পরিচালনা করে।
// এটা হলো তোমার React-এর starting point। কারণ, createRoot(document.getElementById('root')!).render

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'        // এইভাবে শুধু Default export এর জন্য লেখা হয়।
// মানে: App.tsx থেকে default exported App component-টা এখানে নিয়ে আসো।
import { Profile } from './App.tsx'   // Named export এর ক্ষেত্রে এইভাবে লিখতে হবে।

console.log(App);
console.log(Profile);

import { User } from "./App.tsx";
import { Introduction } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Profile />
    <User />
    <Introduction                        // Introduction component এ এইভাবেও ডাটা পাঠানো যায়।
      name="Md. Samiul Alam Sayed"
      age={21}
      profession="Entrepreneur"
    />
  </StrictMode>,
)


// <App /> ও <App></App> সেম। মানে: App component-কে JSX-এর মধ্যে ব্যবহার/render করা। <App /> - এটা self-closing element।
// <StrictMode> - হলো React-এর একটি built-in component।
// StrictMode মূলত development-এর সময় আপনার React code-এর সম্ভাব্য সমস্যা খুঁজে বের করতে সাহায্য করে।
// createRoot - এটা একটা function যেটা React থেকে import করা হয়েছে: (import { createRoot } from 'react-dom/client')
// এটা একটা React root object তৈরি করে/ফেরত দেয়।
// .render() - createRoot(...) যে root object return করে, তার মধ্যে render নামের method আছে।
// এখানে ! = TypeScript-এর non-null assertion operator। এটা টাইপ্সক্রিপ্ট কে নিশ্চয়তা দেয় যে, "root" নামের এলিমেন্টটা আছে, তাই null হবে না।
/*
উপরের কোডটাকে ভেঙে লিখলে:

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <App />
);

*/