import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:fire",
        excerpt: "What more do you want to know?"
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "optimaze",
        title: "Optimaze",
        file: "https://github.com/optimazme/frontend/blob/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "web3 game frontend",
        link: "https://github.com/optimazme/frontend/"
      }
    ]
  }
];

export default bear;
