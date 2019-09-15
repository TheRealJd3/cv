import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://en.gravatar.com/userimage/137572725/7c6c12875f70939ca22c2e8ae9f2f51f.jpg?size=200',
      name: `Jason Shawn D' Souza`,
      profession: 'Graduate Student at Cork Institute of Technology | Artificial Intelligence',
      bio: 'Full-Stack Developer',
      address: '2,The Orchard,Rossa Ave,Bishopstown,Cork, Ireland',
      social: [
        {name: 'github', url: 'https://github.com/TheRealJd3'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/jason-shawn-d-souza-731256109/'}
      ],
      experience: [
        {jobTitle: 'Techincal Associate',company:'Encore Theme Technologies', startDate: 'November 2018', endDate: 'September 2019', jobDescription: 'Using Hyperledger Fabric to develop a Blockchain Application'},
        {jobTitle: 'Full-Stack Developer Intern',company:'Cloud Iris', startDate: 'July 2018', endDate: 'August 2018', jobDescription: 'Develop Android Applications according to specifications set by clients'},
        {jobTitle: 'Lab Assistant',company:'Heriot-Watt University', startDate: 'September 2017', endDate: 'December 2017', jobDescription: ' Manage Software/Devices and clear student doubts regarding their code. '},
      ],
      projects: [
        {jobTitle: 'Confidential Project', company:'Encore Theme Technologies', startDate: 'November 2018', endDate: 'September 2019', jobDescription: 'Confidential project done using Hyperledger Blockchain framework',link:['Not yet done']},
        {jobTitle: 'Jade RMS', company:'Heriot-Watt University & Leidos', startDate: 'October 2016', endDate: 'May 2017', jobDescription: 'Design a resource management system web application. Developed using Codeigniter (PHP framework) and MySQL database',link:['https://jade-rms.herokuapp.com']}
      ],
      education: [
        {degree: 'BS Computer Systems (Honours)', institution: ' Heriot-Watt University ', startDate: '2014', endDate: '2018', description: ''},
        {degree: 'Msc Artificial Intelligence', institution: ' Cork Institute of Technology ', startDate: '2019', endDate: 'present(expected August 2020)', description: ''},

      ],
      skills: [
        {name: 'JavaScript', percentage: '90%'},
        {name: 'Nodejs', percentage: '90%'},
        {name: 'Java', percentage: '80%'},
        {name: 'Android Programming', percentage: '80%'},
        {name: 'React', percentage: '40%'},
        {name: 'React-Native', percentage: '45%'},
        {name: 'PHP', percentage: '80%'},
        {name: 'Git/Versioning Tools', percentage: '90%'},
        {name: 'Hyperledger Blockchain (Fabric)', percentage:"90%"},
        {name: 'Techincal Writing', percentage:"90%"},
        {name: 'Linux/Shell Scripting', percentage:"80%"},
        {name: 'Python', percentage:"90%"},
        {name: 'Go', percentage:"85%"}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Skills skills={person.skills} />
                <Projects  experience={person.projects}/>
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
