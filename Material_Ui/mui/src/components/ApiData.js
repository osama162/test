import { Margin } from "@mui/icons-material";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";

function ApiData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => setData(response.data))
  //       .catch((error) => setError(error.message));
  //   }, []);
  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(body);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title, body })
      .then((response) => {
        // console.log(response);
      });
  };

  return (
    <>
      <h1>Post Data Through Axios APi</h1>
      <div className="blog">
        <input
          type="text"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter The Title Of Blog Post"
        />
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          name="body"
          className="text-area"
          style={{ display: "block", margin: "10px auto" }}
          rows={2}
          placeholder="Enter The Body Of Post"
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <input
        type="text"
        value={input}
        placeholder="Search Post"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="grid">
        {error !== "" && <h2>{error}</h2>}
        {data
          .filter((item) => {
            return input.toLowerCase() === ""
              ? item
              : item.title.includes(input);
          })
          .map((post) => {
            const { body, id, title } = post;
            return (
              <div key={id} className="card">
                <h2>{title.toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ApiData;
