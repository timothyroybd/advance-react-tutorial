import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
      <section className="container users">
        {users.map(({ login, id, avatar_url, url, html_url }) => {
          return (
            <article key={id}>
              <img src={avatar_url} alt="" />
              <h3>{login}</h3>
              <a href={html_url} target="_blank">
                Github
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default UseEffectFetchData;
