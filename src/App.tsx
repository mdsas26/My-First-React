// এখানে, App একটা component। component সবসময় আপারকেস এ লিখতে হয়। প্রতিটা ফাংশনই রিয়াক্টে component.
// React function component সাধারণত এমন কিছু মাস্ট return করে, যেটা React render করতে পারে।
// এখানে <h1>Hello</h1> হচ্ছে JSX syntax। একাধিক nested element মিলেও JSX structure হতে পারে।
// Component একটা React element return করছে, যেটা React ব্যবহার করে UI render করে।
// এটা TSX file, যার মধ্যে JSX syntax ব্যবহার করা হচ্ছে।


function App() {      // App-কে সাধারণত root/main বা top-level application component হিসেবে ব্যবহার করা হচ্ছে।
  return (
    <>
      <h1>Hello React</h1>

      <Introduction2    // এইখানে কনভেনশন অনুযায়ী component এর props এ ডাটা দেওয়া হয়। এখানে, App হলো parent, Introduction2 হলো child।
        name="Rakib"
        age={18}                  
        profession="Student"
      />

    </>
  )
}

export default App

 // age={18} - এখানে {} - JSX-এর ভিতর JavaScript expression ঢোকানোর দরজা। string বাদে props এ অন্য ডাটা টাইপ পাঠানোর জন্য এটা লাগবে।

// JSX-এ component নেম lowercase হলে রিয়াক্ট এ সেটা সাধারণত HTML element হিসেবে ধরা হয়।
// Render মানে: কোনো UI/element-কে screen-এ দেখানোর জন্য প্রস্তুত করা এবং DOM-এ বসানো/আপডেট করা।

/*
App Component
     ↓
React render করে
     ↓
<h1>Hello React!</h1>
     ↓
DOM-এ বসে
     ↓
Browser-এ দেখা যায়
*/

//export default App মানে: এই App কে এই file-এর বাইরে অন্য file থেকে ব্যবহার করার জন্য export করা। এটা javascript এর module এর অংশ

/*
পুরো flow:

App.tsx
   │
   │ export default App
   ↓
main.tsx
   │
   │ import App
   ↓
<App />
   │
   ↓
React render
*/


function Profile() {
  return (
    <div>
      <p>I am Sayed</p>
      <p>I am a Full Stack Developer</p>
    </div>
  )
}

// export default profile  // error হবে কারণ: একটা file এ একটাই default export রাখা যাবে।
export { Profile }          // এইটা হলো Named export।





// Fragment shorthand - একটা component থেকে পাশাপাশি একাধিক JSX element return করতে গেলে লাগে। 
// Fragment নিজে DOM-এ কোনো element তৈরি করে না।

/*
syntax:
 <>
  ...code...
</>

এর পূর্ণ syntax হলো:
<React.Fragment>
  ...code...
</React.Fragment>
*/

function User() {
  return (
    <>
      <h2>React is interesting</h2>
      <p><b>I enjoy it.</b></p>
    </>
  )
}

export { User }





// Props - props হচ্ছে function/ component -এর parameter. Props - React-এ read-only শুধু পড়া যায়, পরিবর্তন করা যায় না। 
// এটা শুধু object গ্রহণ করে । তাই JavaScript-এর সাধারণ object property access-এর নিয়মেই: props.name
// Props হলো parent component থেকে child component-এ data পাঠানোর মাধ্যম।
// একটা React component-এ সাধারণত props নামে একটাই parameter নেওয়া হয়।

interface IntroductionProps {
  name: string;
  age: number;
  profession: string;
}

function Introduction(props: IntroductionProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
      <h4>Profession: {props.profession}</h4>
    </div>
  )
}

export { Introduction }

// এখানে, name = "Md. Samiul Alam Sayed", age = {21}, profession = "Entraupranure" কে একেকটা prop বলে।
// আর function Introduction (props) এর props হলো সবগুলো prop ধারণ করা object। props নামটা বাধ্যতামূলক না। 
// একটা component screen-এ দেখতে হলে সেটাকে কোনো render tree-এর মধ্যে থাকতে হবে।
// return করলেই automatically render হয় না। export, import ও রেন্ডার করে না। 



function Introduction2(props: IntroductionProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
      <h4>Profession: {props.profession}</h4>
    </div>
  )
}

// export { Introduction2 }   // এখানে App component থেকে props এ ডাটা পাঠানো হচ্ছে এবং 
// প্যারেন্ট-চাইল্ড দুইটাই একই ফাইলে তাই আলাদা করে এইটার জন্য export, import এর প্রয়োজন নেই।
// কিন্তু Child component আলাদা file-এ থাকলে  export, import করতে হবে।