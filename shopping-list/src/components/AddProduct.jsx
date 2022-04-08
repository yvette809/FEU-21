import { useState } from "react";

const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product === "") {
      alert("product cannot be empty");
      return
    }

    addProduct(product, completed);
    setProduct("");
    setCompleted("");
  };
  return (
    <div className="container">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label font-bolder"
          >
            Product
          </label>
          <input
            type="product"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add a poduct"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Toggle Completed
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            value={completed}
            id="flexCheckDefault"
            onChange={(e) => setCompleted(e.currentTarget.checked)}
          />
        </div>
        <button className="btn btn-light mt-3">Save Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
