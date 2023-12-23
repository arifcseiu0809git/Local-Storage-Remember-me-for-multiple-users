import React, { useState } from 'react';

const App = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [user, setUser] = useState('');

   const handle = () => {

    let commentsArray = localStorage.getItem("users") // Get Previous Comments
    let temp = []

    if(commentsArray !== null) {
        temp = [...JSON.parse(commentsArray)]
    }

    temp.push({
      name: name,
      pass: pwd,
    })
    localStorage.setItem("users", JSON.stringify(temp))
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
      localStorage.removeItem('users');
   };

   const handleChange = (event) => {
    // 👇 Get input value from "event"
    //console.log('for test:',event.target.value);
    setName(event.target.value);

    if(localStorage.getItem('users')!==null)
    {
      //console.log(localStorage.getItem('users'));
      let st=JSON.parse(localStorage.getItem('users'));

      for(let i=0; i<st.length; i++)
      {
        console.log('loop: ',name,pwd,st[i].name,st[i].pass);
        if(st[i].name===event.target.value)
        {
          setPwd(st[i].pass);
          console.log('final loop: ',st[i].name,st[i].pass);
          break;
        }
        else
        {
          setPwd('')
        }
      }
    }
  };

   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            //onChange={(e) => setName(e.target.value)}
            onChange={handleChange}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            {/* <button onClick={handle}>Done</button> */}
         <input
          type="checkbox"
          id="checkbox"
          defaultChecked={false}
          onClick={handle}
        />
        <label htmlFor="checkbox">I agree to Terms of Service </label>
         </div>

         {/* {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )} */}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default App;