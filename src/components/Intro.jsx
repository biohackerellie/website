import React from 'react';
import Type from './type';

function Intro() {
  return (
    <div className="flex items-center 
    justify-center flex-col text-center pt-20
    pb-6">
      <h1 className=" text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Ellie Kerns</h1>
      <p  className="text-sky-500 md:text-xl mb-3 font-medium">
      <Type  className="text-sky-500 md:text-xl mb-3 font-medium"/>
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold"> I'm an Audio Engineer, Artist, and Musican by hobby, and in my professional career, I've spent the last 10 years working with IT Systems and have begun moving into software development.
              Basically you can call me a nerd 🤷‍♀️ <br />
              My decade of IT experience includes working with Powershell, Linux, Windows Server, Docker, and more! My specialties as a Sys Admin are  Automation and Virtualization  and also in areas related to Devops and Network Administration. 
              It's my never ending goal to always pursue knowledge in the tech industry and in doing so, I've begun my journey into software development alongside my Administration career.</p>
    </div>
    
  )
}

export default Intro;