import React, { useState } from "react";

const ShortCirEval = () => {
  const [demo, setDemo] = useState([
    {
      id: 0,
      name: "ShortCirEval",
      age: 25,
    },
    {
      id: 1,
      name: "ShortCirEval11",
      age: 25,
    },
  ]);


  return (
    <div>
      <h1>
        OR :
        {(
          <>
            {demo.map((current) => {
              return <h1 className="h1Style" key={current.id}>Name : {current.name} and Age : {current.age}</h1>;
            })}
          </>
        ) || "No data found"}
      </h1>
      <h1>AND : {demo && "Vinod"}</h1>
    </div>
  );
};

export default ShortCirEval;
