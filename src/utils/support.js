import { MdHome, MdLibraryMusic, MdMusicNote } from "react-icons/md";

export const menuitems = [
  {
    id: 1,
    icon: <MdHome className="text-2xl text-textcolor" />,
    name: "Home",
    uri: "/home",
  },
  {
    id: 2,
    icon: <MdLibraryMusic className="text-2xl text-textcolor" />,
    name: "library",
    uri: "/library",
  },
  {
    id: 3,
    icon: <MdMusicNote className="text-2xl text-textcolor" />,
    name: "playlist",
    uri: "/playlist",
  },
];
