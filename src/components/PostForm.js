import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault(); // чтобы страничка не обновлялась
    const newPost = {
      // создаём объект нового поста
      ...post, // разворачиваем объект поста
      id: Date.now(), // и добавляем к нему id
    }; // получаем новый объект
    create(newPost); // в функцию которую вытащили с главного файла передаём новый пост
    setPost({ title: "", body: "" }); // делаем инпуты снова пустыми
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })} // при изменении значения инпута меняем пост
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
