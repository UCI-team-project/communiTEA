import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_REVIEW } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Button } from "antd";
import style from "./reviewForm.module.css";

export default function ReviewForm() {
  const [formState, setFormState] = useState({
    content: "",
    score: "",
  });

  const [addReview, { error, data }] = useMutation(ADD_REVIEW);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("formstate", formState);

    try {
      const { data } = await addReview({
        variables: { ...formState },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <form onSubmit={handleFormSubmit}>
            <div className={style.input}>
              <label htmlFor="content">Content</label>
              <input
                type="text"
                name="content"
                id="content"
                value={formState.content}
                onChange={handleChange}
              />
            </div>
            <div className={style.input}>
              <label htmlFor="score">Score</label>
              <input
                type="number"
                name="score"
                id="score"
                value={formState.score}
                onChange={handleChange}
              />
            </div>
            <Button htmlType="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}
