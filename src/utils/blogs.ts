// import b1 from "@/assets/b1.svg";
// import b2 from "@/assets/b2.svg";
// import b3 from "@/assets/b3.svg";
// import b4 from "@/assets/b4.jpg";
// export const articles = [
//   {
//     id: "1",
//     title: "Rethinking the News: How XPoll and GRWB Could R...",
//     description: "It’s the foundation of a new era of journalism.",
//     date: "Jan 3, 19:08",
//     image: b1,
//   },
//   {
//     id: "2",
//     title: "Augmented Reality Trends for 2022",
//     description: "It’s the foundation of a new era of journalism.",
//     date: "Jan 3, 19:08",
//     image: b2,
//   },
//   {
//     id: "3",
//     title: "Augmented Reality Trends for 2022",
//     description: "It’s the foundation of a new era of journalism.",
//     date: "Jan 3, 19:08",
//     image: b3,
//   },
//   {
//     id: "4",
//     title: "Augmented Reality Trends for 2022",
//     description: "It’s the foundation of a new era of journalism.",
//     date: "Jan 3, 19:08",
//     image: b4,
//   },
//   {
//     id: "5",
//     title: "Augmented Reality Trends for 2022",
//     description: "It’s the foundation of a new era of journalism.",
//     date: "Jan 3, 19:08",
//     image: b2,
//   },
// ];
import dayjs from "dayjs";
import type { Article } from "@/components/blogs/cards";

type BlogEntry = {
  _id: string;
  title: string;
  pollStatement?: string;
  imageUrls?: string[];
  createdAt: string;
};

export const mapEntriesToArticles = (entries: BlogEntry[]): Article[] => {
  return (entries ?? []).map((e) => ({
    id: e._id,
    title: e.title,
    description: e.pollStatement ?? "",
    image: e.imageUrls?.[0] ?? "", // ✅ first image only
    date: dayjs(e.createdAt).format("MMM D, HH:mm"), // ✅ "Dec 12, 13:32"
  }));
};
