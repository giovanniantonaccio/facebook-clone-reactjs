import React, { Component } from "react";
import "./Feed.css";

import Post from "./Post.js";

class Feed extends Component {
  state = {
    posts: [
      {
        id: "1",
        author: {
          name: "Júlio Ancantara",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d"
        },
        date: "21 Jul 2019",
        content:
          "Galera, alguém mais fazendo o Bootcamp GoStack da Rocketseat?",
        comments: [
          {
            id: 1,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d"
            },
            date: "21 Jul 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Clara Avelar",
              avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d"
            },
            date: "21 Jul 2019",
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: "2",
        author: {
          name: "Júlio Ancantara",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d"
        },
        date: "21 Jul 2019",
        content:
          "Galera, alguém mais fazendo o Bootcamp GoStack da Rocketseat?",
        comments: [
          {
            id: 1,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d"
            },
            date: "21 Jul 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Clara Avelar",
              avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d"
            },
            date: "21 Jul 2019",
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: "3",
        author: {
          name: "Júlio Ancantara",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d"
        },
        date: "21 Jul 2019",
        content:
          "Galera, alguém mais fazendo o Bootcamp GoStack da Rocketseat?",
        comments: [
          {
            id: 1,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d"
            },
            date: "21 Jul 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Clara Avelar",
              avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d"
            },
            date: "21 Jul 2019",
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="feed-body">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default Feed;
