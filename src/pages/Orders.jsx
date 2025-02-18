import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ Url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const res = await axios.get(Url + "/api/order/list");
    if (res.data.success) {
      setOrders(res.data.data);
      console.log(res.data.data);
    } else {
      toast.error(res.data.message);
    }
  };

  const updateStatus = async (e, orderId) => {
    const res = await axios.post(Url + "/api/order/status", {
      orderId,
      status: e.target.value,
    });
    if (res.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="">
      <h3>Order page</h3>
      <div className="">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="max-900:text-xs max-900:grid-cols-[0.5fr_2fr_1fr] max-900:px-2 max-900:py-[15px] grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border border-solid border-orange-500 p-5 mx-0 my-[30px] text-sm text-gray-600 "
            >
              <img className="max-900:w-10" src={assets.parcel_icon} alt="" />
              <div>
                <p className="font-semibold">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ",";
                    }
                  })}
                </p>
                <p className="font-semibold mt-[30px] mb-[5px]">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="mb-[10px]">
                  <p className="">{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      "," +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="">{order.address.phone}</p>
              </div>
              <p>items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select
                onChange={(e) => updateStatus(e, order._id)}
                value={order.status}
                className="max-900:p-[5px] max-900:text-xs bg-gray-200 border border-solid border-orange-600 w-[max(10.8vw,120px)] p-[10px] outline-none"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
