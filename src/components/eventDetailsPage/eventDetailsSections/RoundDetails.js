import React from "react";

const RoundDetails = () => {
  const roundData = [
    {
      title: "Subway Surfer Challenge",
      description: [
        "In this round, participants will compete against each other in the classic Subway Surfer game using camera and motion detection technology.",
        "The objective of the game is to run as far as possible while avoiding obstacles and collecting coins.",
        "Participants will be able to see their opponent's progress on the screen, adding a competitive edge to the game.",
        "The player with the highest score at the end of the round will be declared the winner.",
        "The Subway Surfer Challenge requires participants to use quick thinking, strategic planning, and precise movements.",
        "This round will test the participants' agility, coordination, and problem-solving skills, making it a thrilling and exciting challenge for all players.",
      ],
    },
    {
      title: "Balloon Popper Challenge",
      className: "order-last",
      description: [
        "In this round, participants will play the Balloon Popper game using camera and motion detection technology.",
        "The objective of the game is to pop as many balloons on the screen as possible by using a real ball.",
        "Participants will be tasked with hitting all the balloons on the screen before they fly out.",
        "The game is fast-paced and requires quick reflexes and precise movements.",
        "Participants will compete against each other for the highest score, and the top performers will move on to the next round.",
        "The Balloon Popper round is designed to test the participants' hand-eye coordination and reaction time, making it a fun and exciting challenge for all players.",
      ],
    },
    {
      title: "Beat Saber Finale",
      description: [
        "The Beat Saber Finale is the final round of the X - Motion Game Mania event.",
        "In this round, participants will use camera and motion detection technology to play the popular rhythm-based Beat Saber game.",
        "The objective of the game is to slash the virtual beats with a pair of laser swords, in time with the music.",
        "Participants will be competing against each other for the highest score, with the winner being declared the champion of the X - Motion Game Mania event.",
        "The Beat Saber Finale requires participants to combine quick reflexes, coordination, and musical rhythm to succeed.",
        "This exciting and challenging round will test the skills of all participants and provide a thrilling conclusion to the X-Motion Game Mania event. Get ready to rock out and show your skills!",
      ],
    },
  ];

  return (
    <div>
      <div>
        {roundData.map((round, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-0 py-10 "
          >
            <div className={round.className}>
              <li className="list-decimal font-semibold my-2 text-white text-lg">
                {round.title}
              </li>
              <ul className="pl-4">
                {round.description.map((desc, descIndex) => (
                  <li key={descIndex} className="font-light list-disc mb-3">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="../../../../public/eventDeatailsImgs/login-back.png"
              alt=""
              className="w-full h-full rounded-xl hidden lg:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundDetails;
