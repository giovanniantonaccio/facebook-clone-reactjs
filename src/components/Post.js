import React from "react";
import "./Post.css";

import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";

function Post() {
  return (
    <div className="post-content">
      <div className="post-header">
        <img src={user1} alt="User 1" />
        <div className="post-info">
          <strong>Júlio Ancantara</strong>
          <small>21 Jul 2019</small>
        </div>
      </div>
      <p>Galera, alguém mais fazendo o Bootcamp GoStack da Rocketseat?</p>
      <ul className="comment">
        <li>
          <img src={user2} alt="User 2" />
          <p>
            <strong>Cézar Toledo </strong> Também estou fazendo o Bootcamp e
            estou adorando! Estou no terceiro módulo sobre Node e já tenho minha
            API dos desafios contruída!
          </p>
        </li>
        <li>
          <img src={user3} alt="User 2" />
          <p>
            <strong>Gabriel Lisboa </strong> Que maaaaassa! Estou pensando em me
            inscrever na próxima turma pra ver qual é desse Bootcamp GoStack,
            dizem que os devs saem de lá com super poderes!
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Post;
