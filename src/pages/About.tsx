import React, { useState, useEffect } from "react";

/* 
Family Man
Software Engineer/ Web Developer
Soldier
Student/ College degree
*/
var titles = ["Software Engineer", "Father", "Soldier", 'Explorer'];
var sfparagraph1 = `I graduated from Snow College in Ephraim with a Bachelor's in Software Engineering. I chose to emphasis in Web Development. The program at
Snow College was extensive with classes ranging from Front end design to database creation and administration. I created web applications, APIs, worked with AWS,
, Ethical hacking, and two classes on data systems and Algorithms. I learned alot about being a Software Engineer. But most importantly I learned to
think like a Software Engineer. How to design a system from start to finish and then prove that the system works through extensive testing. I was
privelaged to be taught by Engineers who have years of experience in the field.
`;
var sfparagraph2 = ""
function About() {
  const [titles, setTitles] = useState<any[]>([
    {"title":"Software Engineer", "color": "text-slate-500"},
    {"title":"Father", "color": "slate"},
    {"title":"Soldier", "color": "green"}
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Justin Holsclaw</h1>
      <div className="text-xl text-center">{<h1 className={"color-" +titles[currentIndex].color + "-900"}>{titles[currentIndex].title}</h1>}</div>
      <div>
        <p className="bg-white p-2 mr-4 ml-4 rounded">{sfparagraph1}</p>
        <img></img>
      </div>
      <div>
        <p className="bg-white p-2 mr-4 ml-4 rounded">{sfparagraph1}</p>
      </div>
      <div>
        <p className="bg-white p-2 mr-4 ml-4 rounded">{sfparagraph1}</p>
      </div>
    </div>
  );
}

export default About;
