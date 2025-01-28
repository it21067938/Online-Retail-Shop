import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("image", data.image);
    formData.append("category", data.category);
    try {
      const response = await axios.post(
        "http://localhost:3001/product/add",
        formData
      );
      console.log(response);
      if (response.data.success) {
        toast.success("hareem");
      } else {
        console.log(response.data.message);
        toast.error("Aiooo");
      }

    } catch (error) {
      console.error(error.message);
      toast.error("fail");
    }

  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Input Product</h1>
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.name}
          name="name"
          placeholder="Enter your name"
        />
        <textarea
          type="text"
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          placeholder="Enter your description"
        />
        <input
          type="Number"
          onChange={onChangeHandler}
          value={data.price}
          name="price"
          placeholder="Enter your price"
        />
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.image}
          name="image"
          placeholder="Enter your image"
        />
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          placeholder="Enter your category"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
