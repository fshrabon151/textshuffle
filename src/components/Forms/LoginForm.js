import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [alert, setalert] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
      setalert("")
      console.log(newEntry);
    }else{
        setalert("Please enter data")
    }
  };
  return (
    <>
      <form className="login" onSubmit={submitForm} autoComplete="off">
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{color: 'red'}}>{email}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <br />
      <div className="">
        {allEntry.map((entry) => {
          const { id, email, password } = entry;
          return (
            <div className="showDetails" key={id}>
              <p>
                Email : {email} || Password : {password}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LoginForm;
