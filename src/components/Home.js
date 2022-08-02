import photo from '../img/photo.jpg';
import resume from '../files/Resume.doc';

const Home = () => {
  return (
    <div id='home' className='flex items-center wrap'>
      <div className='photo'>
        <img src={photo} alt='my_photo' />
      </div>
      <div className='content content-padding'>
        <h1 className='ws'>Hii I am,</h1>
        <h2 className='ws lh'>NIKHIL S</h2>
        <h3 className='ws lh'>
          Student | Web Developer | Electronics Enthusiastic
        </h3>
        <p className='intro lh'>
          A Passionate Web Developer and An Electronic enthusiast always willing
          to learn new technologies and current trends. I am a fast learner and
          can adopt to any sitiuations. A kind of person who always like things
          which are practical and hands on. I have the ability to take lead and
          solve problems. I think all the possible and alternate solutions for
          the problems and consider all of them as useful in one or the other
          way. My principle of learning is Study less and Understand more
        </p>
        <div className='resume'>
          <a href={resume} download='Nikhil S.doc'>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
