const Projects = () => {
  return (
    <div id='projects' className='center'>
      <h1>Projects</h1>
      <div className='fields'>
        <span>
          <strong>My Personal Portfolio</strong> <br />
          Built using ReactJS and hosted on github pages
        </span>
      </div>
      <div className='fields'>
        <span>
          <strong>Strawberry Stacker</strong> <br />
          Controlling a team of Quadcopters and achieve the task of picking
          <br />
          strawberry boxes from a field and stacking them onto a transport
          trailer <br />
          Major Concepts used: Robot Operating System (ROS), OpenCV, Python, PX4
          Autopilot
        </span>
      </div>
      <div className='fields'>
        <span>
          <strong>Smart Stock Display</strong> <br />
          Display the Stock information of the Stationary in distant area of a
          campus <br />
          Major Concepts used: Zigbee Protocol, Arduino, Webserver
        </span>
      </div>
    </div>
  );
};

export default Projects;
