import React from "react";

function Navbar() {
      return (
            <nav class="navbar navbar-light bg-light">
                  <span class="navbar-brand mb-0 h1">Google Books</span>
                  <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="/">Search</a>
                        <a class="navbar-brand" href="/saved">Saved</a>
                        {/* <Link to="/">Search</Link>
                        <Link to="/saved">Saved</Link> */}
                  </nav>
            </nav>
      );
}

export default Navbar;
