import LP from "./LP.svg";
import LR from "./LR.svg";
import LV from "./LV.svg";
import SC from "./SC.svg";
import SMM from "./SMM.svg";
import TB from "./TB.svg";

const StudyLinksData = [
  { id: 0, title: "Lab Videos", image: LV, destination: "Youtube" },
  { id: 1, title: "Lab Photos", image: LP, destination: "Google Drive" },
  {
    id: 2,
    title: "School Calander",
    image: SC,
    destination: "Google Calander",
  },
  {
    id: 3,
    title: "Student Made Material",
    image: SMM,
    destination: "Google Drive",
  },
  { id: 4, title: "Textbooks", image: TB, destination: "Google Drive" },
  {
    id: 5,
    title: "Lecture Recordings",
    image: LR,
    destination: "Google Drive",
  },
];

export default StudyLinksData;
