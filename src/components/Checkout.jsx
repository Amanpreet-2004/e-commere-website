import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order placed successfully!");

    setFormData({
        name: "",
        email: "",
        address:"",
        payment: "",
        });
        navigate("/orderDone");
  };

  return (
    <div className="container7 text-center">
      <h2 className="text-center ">Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-4 card rounded "
        style={{ maxWidth: "450px",maxHeight:"auto" }}
      >
       
        <div className="mb-3 ">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control"
            name="name"
            placeholder="Enter Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Delivery Address</label>
          <textarea
            className="form-control"
            rows="3"
            name="address"
            placeholder="Enter Your address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        
        <div className="mb-3">
          <label className="form-label">Payment mode</label>
            <select
            className="form-control"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
            >
            <option value="" disabled>Select Payment Method ⬇️</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="googlePay">Google Pay</option>
            </select>
        </div>

       
        <button type="submit" className="btn4 w-75 d-block mx-auto">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
