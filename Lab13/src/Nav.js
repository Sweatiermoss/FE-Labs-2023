import React from "react";

export default function Nav({ singleUser }) {
  return (
    <div>
      <nav className="Nav">
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section>
        <div>
            <h1>Welcome, {singleUser.name}</h1>
            <p>Today is {singleUser.time}</p>
        </div>
      </section>
    </div>
  );
}

