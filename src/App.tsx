import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Siderbar";
import { PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: "" }
// content: String
// plubishedAt: Date

const posts: PostType[] = [
  {
    id: 0,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/51970876?v=4",
      name: "José Fernandes",
      role: "Front-end Developer",
    },
    publishedAt: new Date("2023-05-11 08:13:30"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/104021976?v=4",
      name: "Layane Fernandes",
      role: "Database Administrator",
    },
    publishedAt: new Date("2023-05-15 15:12:30"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
