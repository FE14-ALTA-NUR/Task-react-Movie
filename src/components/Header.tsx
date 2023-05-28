import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">MyMovies</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Favorites
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
