import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ Url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const res = await axios.get(`${Url}/api/food/list`);
    if (res.data.success) {
      setList(res.data.data);
      toast.success("food List fetched !!!");
    } else {
      toast.error(res.data.message);
    }
  };

  const removeFood = async (foodId) => {
    const res = await axios.post(`${Url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full mt-5 ml-5">
      <p>All Food items List</p>
      {/* list table */}
      <div className="w-full ">
        {/* list table title */}
        <div className="max-600:hidden grid grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr]  items-center text-gray-800 px-[15px] py-3 text-[max(1vw,_12px)]  bg-gray-400 ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="max-600:grid-cols-[1fr_3fr_1fr] max-600:gap-[15px] grid grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] border border-solid border-gray-300 border-t-0 items-center px-[15px] py-3 text-gray-800 text-[max(1vw,_12px)] "
            >
              <img
                className="w-14"
                src={`${Url}/images/` + item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p
                onClick={() => removeFood(item._id)}
                className="text-orange-600 text-xl cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

// "grid grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] items-center text-gray-800 text-[max(1vw,_12px)] mx-0 my-[10px]

// grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] px-[15px] py-3 border border-solid border-gray-300 text-[13px]
