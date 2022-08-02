import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

const Footer = () => {
  return (
    <footer className='footer flex items-center content-center'>
      <a
        href='https://www.instagram.com/_nikhilsnayak_/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={instagram} alt='Instagram' />
      </a>
      <a
        href='https://www.linkedin.com/in/nikhil-nayak-146a931b6/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={linkedin} alt='Linkedin' />
      </a>
      <a
        href='https://www.facebook.com/nikhil.s.nayak.35/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={facebook} alt='Facebook' />
      </a>
    </footer>
  );
};

export default Footer;
