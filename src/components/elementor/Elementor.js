import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Elementor.css"

const Elementor = () => {
  const [align, setAlign] = useState("center");
  const [size, setSize] = useState("30px");
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

  const style = {
    textAlign: align,
    fontSize: size,
    color: color,
    fontFamily: font
  };
  console.log(color);
  return (
    <div className="container align-self-center">
      <h2 className="p-5 text-center">Text shuffle</h2>
      <div>
          <input
            type="text" className="form-control"
            placeholder="Insert your text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      <div className="row mt-5 justify-content-between">

        <div className="col-md-3 my-3">
          <label htmlFor="">Select Text Align</label>
          <select className="form-control" onChange={(e) => setAlign(e.target.value)}>
            <option value="">--Select alignment--</option>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="col-md-3 my-3">
        <label htmlFor="">Select Font Size</label>
          <select className="form-control" onChange={(e) => setSize(e.target.value)}>
            <option value="">--Select font size--</option>
            <option value="40px">40px</option>
            <option value="60px">60px</option>
            <option value="80px">80px</option>
            <option value="100px">100px</option>
          </select>
        </div>
        <div className="col-md-3 my-3">
        <label htmlFor="">Select Font Color</label>
          <input type="color" className="form-control" onChange={(e) => setColor(e.target.value)} />
        </div>

        <div className="col-md-3 my-3">
        <label htmlFor="">Select Font Family</label>
          <select className="form-control" onChange={(e) => setFont(e.target.value)}>
            <option value="">--Select fonts--</option>
            <option value="'Mate SC', serif">Mate SC</option>
            <option value="'Montserrat Alternates', sans-serif">Montserrat Alternates</option>
            <option value="'Montserrat Subrayada', sans-serif">Montserrat Subrayada</option>
            <option value="'Charmonman', cursive">Charmonman</option>
          </select>
        </div>
      </div>

      <br />

      <div className="show_output">
        <p style={style}>{input}</p>
      </div>
    </div>
  );
};

export default Elementor;
