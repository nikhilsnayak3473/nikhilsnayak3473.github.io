import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header>
      <nav className='navbar flex items-center sticky-top'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='flex'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
