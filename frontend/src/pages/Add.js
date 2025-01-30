import React, { useEffect, useState } from "react";
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
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = data._id
        ? await axios.put(`http://localhost:3001/product/edit/${data._id}`, data)
        : await axios.post("http://localhost:3001/product/add", data);
  
      if (response.data.success) {
        toast.success(`Product ${data._id ? "updated" : "added"} successfully!`);
      } else {
        toast.error(response.data.message || `Failed to ${data._id ? "update" : "add"} product.`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`An error occurred while ${data._id ? "updating" : "adding"} the product.`);
    }
  };
  

  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const allData = await axios.get("http://localhost:3001/product/get");

      if (allData.data.success) {
        setProducts(allData.data.data);
      } else {
        toast.error("error atho");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/product/remove/${productId}`
      );
      if (response.data.success) {
        toast.success("Deleted product successfully");
      } else {
        toast.error("Error in removing product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Delete operation failed");
    }
  };

  const getProduct = async (productId) => {
    try {
      const product = await axios.get(
        `http://localhost:3001/product/get/${productId}`
      );
      if (!product.data.success) {
        toast.error("Error");
      }
      setData(product.data.data);
      console.log(product);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div >
      <form onSubmit={onSubmitHandler}>
        {data._id ? <h1>Update Product</h1> : <h1>Input Product</h1>}
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
        {data._id ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <br />
      <h1>All Data In the DB</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td
                onClick={() => deleteProduct(item._id)}
                style={{ color: "red" }}
              >
                x
              </td>
              <td onClick={() => getProduct(item._id)}>edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
