import React from "react";

const Rounds = () => {
  const balloonPopperData = [
    "In this round, participants will play the Balloon Popper game using camera and motion detection technology.",
    "The objective of the game is to pop as many balloons on the screen as possible by using a real ball.",
    "Participants will be tasked with hitting all the balloons on the screen before they fly out.",
    "The game is fast-paced and requires quick reflexes and precise movements.",
    "Participants will compete against each other for the highest score, and the top performers will move on to the next round.",
    "The Balloon Popper round is designed to test the participants' hand-eye coordination and reaction time, making it a fun and exciting challenge for all players.",
  ];

  return (
    <div>
      <li class="list-decimal font-semibold my-2 text-white text-lg">
        Balloon Popper
      </li>
      <ul className="pl-4">
        {balloonPopperData.map((item, index) => (
          <li key={index} className="font-light list-disc mb-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rounds;
