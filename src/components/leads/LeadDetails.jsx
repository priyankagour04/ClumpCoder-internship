import React, { useState } from "react";

const LeadDetail = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle comment submission here
    console.log("Comment submitted:", comment);
    setComment("");
  };

  return (
   <>

<div className="text-2xl font-semibold">Lead Details </div>
    <div className="flex space-x-6 ">
  
      <div className="border text-primary space-y-3 bg-white p-6 w-2/4">
        <h2 className=" font-semibold mb-2">Lead Details</h2>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            {" "}
            <span className=" font-semibold">Assigned To: </span>
            <span>zeeshan khan</span>
          </li>
          <li>
            {" "}
            <span  className=" font-semibold">Company Name: </span>
            <span>IROS</span>
          </li>
          <li>
            {" "}
            <span  className=" font-semibold">Lead Status: </span>
            <span>Call Back</span>
          </li>
          <li>
            {" "}
            <span  className=" font-semibold">Lead Type: </span>
            <span>Hot</span>
          </li>

         
          <li>
            {" "}
            <span  className=" font-semibold">Source of Lead: </span>
            <span> Internal</span>
          </li>
        
            
          <li>
            {" "}
            <span  className=" font-semibold">Designation: </span>
            <span>  software developer</span>
          </li>
        
            
          <li>
            {" "}
            <span  className=" font-semibold">Location: </span>
            <span> India</span>
          </li>
        
          <li>
            {" "}
            <span  className=" font-semibold">Mobile: </span>
            <span>ISO 9001 </span>
          </li>
          <li>
            {" "}
            <span  className=" font-semibold">Remarks: </span>
            <span> asdf</span>
          </li>
        </ul>

        <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded"
          >
            Questionnaire Form
          </button>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded"
          >
          Contract Review/ Application Review
          </button>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded"
          >
            Quotation Form
          </button>

      </div>

      <div className="border bg-white h-56 p-6 w-2/3">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border p-4 rounded-md mb-2"
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 float-right rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

   </>
  );
};

export default LeadDetail;
