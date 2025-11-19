import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo left">
          Shop App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Abbosbek-cloud/">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
