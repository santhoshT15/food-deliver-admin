import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ Url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const res = await axios.post(`${Url}/api/food/add`, formData);
    if (res.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-gray-600 text-base">
      {/* flex-col */}
      <form className="gap-5 add-flex" onSubmit={onSubmitHandler}>
        {/* add-img  */}
        <div className="add-flex">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px] cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>
        {/* add-name */}
        <div className="add-flex w-[max(40%,280px)] ">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-[10px] bg-gray-200 rounded"
            type="text"
            name="name"
            placeholder="Enter Name here"
          />
        </div>
        {/* add-description */}
        <div className="add-flex w-[max(40%,280px)]">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-[10px] bg-gray-200 rounded"
            name="description"
            rows="6"
            placeholder="Enter Description here"
          ></textarea>
        </div>
        {/* add category price */}
        <div className="flex gap-[30px]">
          {/* add category */}
          <div className="add-flex">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              className="max-w-[120px] p-[10px] bg-gray-200 rounded"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          {/* add price */}
          <div className="add-flex">
            <p>Porduct Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px] bg-gray-200 rounded"
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-none p-[10px] bg-orange-600 text-white cursor-pointer rounded hover:bg-[#ff0000]"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default Add;
