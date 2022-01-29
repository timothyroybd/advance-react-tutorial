import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const users = await response.json();
    // console.log(`This is response data ${users}`);
    setUser(users);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <section>
      <article>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} alt="" />
        <a href={user.url}>Github</a>
      </article>
    </section>
  );
};

export default MultipleReturns;
