import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
