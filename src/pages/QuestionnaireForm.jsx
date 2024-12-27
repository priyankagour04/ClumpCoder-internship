import React from "react";

const QuestionnaireForm = () => {
  return (
    <>
      <div className="text-2xl font-semibold text-center  mt-2 ">
        <h1>Indian Register Quality System</h1>
        <h1>[A Division of IRCLASS System & Solution Pvt. Ltd.]</h1>
        <h1 className="mt-1">Application Form for IATF 16949</h1>
      </div>

      <form className="mt-8 ">
        <div className="grid grid-cols-3 gap-6">
          {/* Questionnaire No */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Questionnaire No:</label>
            <input
              className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
              type="text"
            />
          </div>
          {/* Date */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Date:</label>
            <input
              className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
              type="date"
            />
          </div>
          {/* Empty Column */}
          <div></div>
        </div>
        <div>
          <div className="text-xl font-bold  mt-5">
            1. Company and Contact Details
          </div>

          <div className="grid grid-cols-3 mt-3 gap-5">
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Company Name</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Company Name"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Address</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Address "
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Invoice Address</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Invoice Address"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Phone No</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Phone No"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Email</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Pan No</label>
              <input
                className=" text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Pan No"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Gst Details</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Gst Details"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Pin Code</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Pin Code"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Website</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Fax No</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Fax No"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Tan No</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Tan No"
              />
            </div>
          </div>

          <div className="text-xl font-semibold mt-5"> Contact Persons</div>

          <div className="grid grid-cols-3 mt-3 gap-5">
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Contact Name</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Contact Name"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Contact Designation</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Contact Designation "
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Contact Phone</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Contact Phone"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Contact Mobile</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Contact Mobile"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold"> Contact Email</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Contact Email"
              />
            </div>
          </div>

          <div className="flex flex-col mt-3 space-y-2">
            <label className="text-secondary_gray">
              Is Multisite Organisation?
            </label>
            <div className="flex items-center space-x-4">
              {/* Yes Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="multisite"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>

              {/* No Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="multisite"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="flex flex-col mt-3 space-y-2">
            <label className="text-secondary_gray">
              Is it under Corporate Scheme?
            </label>
            <div className="flex items-center space-x-4">
              {/* Yes Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Corporate"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>

              {/* No Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Corporate"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        </div>
        {/* 2 details */}
        <div>
          <div className="text-xl font-bold mt-5">
            2. Business Activity (Product, Processes and/or Services )
          </div>
          <textarea
            className="w-full border p-3 rounded-lg mt-3"
            placeholder="Describe your business activities"
          />
          <div className="text-xl font-bold mt-5">
            Desired Scope of Certification
          </div>
          <textarea
            className="w-full border p-3 rounded-lg my-3"
            placeholder=" Desired Scope of Certification"
          />

          <div className="flex flex-col space-y-2">
            <label className="text-xl font-bold mt-3">
              Product Design Responsibility
            </label>
            <div className="flex items-center space-x-4">
              {/* Yes Option */}
              <label className="flex items-center  text-secondary_gray">
                <input
                  type="radio"
                  name="multisite"
                  value="yes"
                  className="mr-2 text-secondary_gray"
                />
                Organisation Responsible
              </label>

              <label className="flex items-center text-secondary_gray">
                <input
                  type="radio"
                  name="multisite"
                  value="no"
                  className="mr-2"
                />
                Or Outsourced
              </label>
              <label className="flex items-center text-secondary_gray">
                <input
                  type="radio"
                  name="multisite"
                  value="no"
                  className="mr-2"
                />
                Customer Responsible
              </label>
            </div>
          </div>
        </div>

        {/* 4 details */}
        <div>
          <div className="text-xl font-bold mt-5">4. QMS Structure</div>
          {/* 4. a.1 */}
          <div className=" font-medium mt-5">Single Manufacturing site</div>
          <div className="grid grid-cols-3 mt-2 gap-5">
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Main Manufacturing Site Address
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">Product at this Site</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter product details"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Language of Communication{" "}
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Language"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Outsourced Processes (if any)
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Outsourced Processes"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                {" "}
                Non-Applicable Clauses
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter non-applicable clauses"
              />
            </div>
            <div className="flex flex-col space-y-5">
              <label className="font-medium">
                Approvals / Regulatory Requirements
              </label>
              <div className="flex items-center space-x-6">
                {/* Yes Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>

                {/* No Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            <button className="text-white bg-primary py-2 rounded-md">
              Add Manufacturing site
            </button>
          </div>
        </div>
        {/* 4. a.2 */}
        <div>
          <div className=" font-medium mt-5">
            Single Manufacturing site with Extented Sites
          </div>
          <div className="grid grid-cols-3 mt-2 gap-5">
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Main Manufacturing Site Address
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Extented Site Address
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Extented Site Address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Transit Time or Distance
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter transit/distance"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                List of Manufacturing Activities
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Manufacturing activities"
              />
            </div>
          </div>
        </div>

        {/* 4. a.3 */}
        <div>
          <div className=" font-medium mt-5">
            4. a.3 Standalone Remote Support Location{" "}
          </div>
          <div className="grid grid-cols-3 mt-2 gap-5">
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">Number of SRSLs</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Number of SRSLs"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                {" "}
                Support Location Address
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter  Address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">Function(s)</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter functions"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Language of Communication
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter Language"
              />
            </div>
          </div>
        </div>
        {/* 4. a.4 */}
        <div>
          <div className=" font-medium mt-5">
            4. a.4 Multiple Manufacturing Sites [Corporate Scheme]{" "}
          </div>
          <div className="text-sm mt-3">
            If yes, then please fill up this Application form for each
            Manufacturing Site Under Corporate Scheme.
            <ul className="mt-3 space-y-2">
              <li>
                Multiple Manufacturing sites are audited collectively with
                common support locations.
              </li>
              <li>
                Separate certificate for each Manufacturing site will be issued.
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-5">
              {/* Label */}
              <label className="font-medium">Corporate Scheme:</label>

              {/* Yes Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="corporateScheme"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>

              {/* No Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="corporateScheme"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5 gap-5">
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Name of the Manufacturing Site
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter site name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold"> Address</label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter  Address"
              />
            </div>
          </div>
        </div>

        {/* 5th details */}
        <div>
          <div className="text-xl font-bold  mt-5">
            5. Type of Certification Required
          </div>
          <div className="grid grid-cols-3 mt-3 gap-5">
            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">
                Initial Certification (Stg. 1 & Stg. 2){" "}
              </label>
              <div className="flex items-center space-x-4">
                {/* Yes Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>

                {/* No Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">
                Upgrade from ISO 9001
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="In case of upgrade from IRQS, Kindly provide  "
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">
                Upgrade from Letter of Conformance
              </label>
              <div className="flex items-center space-x-4">
                {/* Yes Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>

                {/* No Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="no"
                    className="mr-2"
                  />
                  Not applicable
                </label>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Transfer</label>
              <div className="flex items-center space-x-4 text-secondary_gray">
                {/* Yes Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>

                {/* No Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="no"
                    className="mr-2"
                  />
                  Not applicable
                </label>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="mb-2 font-semibold">Renewal</label>
              <div className="flex items-center space-x-4 text-secondary_gray">
                {/* Yes Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>

                {/* No Option */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="multisite"
                    value="no"
                    className="mr-2"
                  />
                  Not applicable
                </label>
              </div>
            </div>
          </div>
          <div className=" font-semibold mt-5">
            Any Changes in the Management System / Operations / Production line/
            Location vis-a-vis last audit
          </div>
          <textarea
            className="w-full border p-3 rounded-lg mt-3"
            placeholder="Enter details of changes       "
          />

          <div className="flex flex-col mt-3 space-y-3">
            <label className="mb-2 font-semibold">
              Have you been previously certified to IATF 16949 and the
              certificate has been Cancelled/ withdrawn/ Expired Letter of
              Conformance
            </label>
            <div className="flex items-center space-x-4 text-secondary_gray">
              {/* Yes Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="multisite"
                  value="yes"
                  className="mr-2"
                />
                Not applicable
              </label>

              {/* No Option */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="multisite"
                  value="no"
                  className="mr-2"
                />
                Yes
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5 gap-5">
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold text-wrap">
                Cancelled/ withdrawn/ Expired LOC
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter reason"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Previous IATF certificate Number
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter certificate number"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Unique Site Identification code of main Manufacturing site
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter USI Code"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                Certificate Valid Until
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="date"
                placeholder=""
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-semibold">
                {" "}
                Previous Certification Body
              </label>
              <input
                className="border text-sm border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter certification body name"
              />
            </div>
          </div>
          <div className=" font-semibold mt-5">
            Has the Organisation failed in Stage 1 readliness assessments and/or
            Stage 2 Certification audit conducted within the last 6 months?
          </div>
          <div className="flex items-center mt-3 space-x-4">
            {/* Yes Option */}
            <label className="flex items-center text-secondary_gray">
              <input
                type="radio"
                name="multisite"
                value="yes"
                className="mr-2"
              />
              Yes
            </label>

            {/* No Option */}
            <label className="flex items-center text-secondary_gray">
              <input
                type="radio"
                name="multisite"
                value="no"
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>


{/* 8 detail */}
<div >
<div className="text-xl font-bold mt-5 mb-2">8.Details of Customer</div>
<div>Customer/ IATF OEM Name is mandatory. Example: General Motors, Ford, Chrysler, volvo, Fait, Jaguar etc.</div>
<div className="grid grid-cols-3 mt-5 gap-6">
          {/* Questionnaire No */}
          <div className="flex flex-col space-y-2">
            <label className="mb-2 font-medium">Customer/ IATF OEM Name</label>
            <input
              className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
              type="text"
              placeholder="Enter OEM name"
            />
          </div>
          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="mb-2 font-medium">Vendor Code</label>
            <input
              className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
              type="text"
              placeholder="Enter vendor code"
            />
          </div>
          {/* Empty Column */}
          <div></div>
        </div>
</div>
        {/* 10 detail */}
        <div>
          <div className="text-xl font-bold mt-5">10. Expected Audit Date</div>
          <div className=" font-medium mt-5">
            Please provide the Expected date for the audit
          </div>
          <textarea className="w-full border  rounded-lg mt-3" />
        </div>

        {/* 11 detail */}
        <div>
          <div className="text-xl font-bold mt-5">
            11. Any Other Certification Scheme(s)
          </div>
          <div className=" font-medium mt-5">Please specify :</div>
          <textarea
            className="w-full border p-3 rounded-lg mt-3"
            placeholder="Enter other certification schemes if applicable "
          />
        </div>
        <div className="border-t border-black my-10"></div>
        <div>
          <div className="text-xl font-bold mt-5">
            Declaration and Authorization
          </div>
          <div className="grid grid-cols-4 mt-3  gap-6">
            {/* Questionnaire No */}
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-medium">Name</label>
              <input
                className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            {/* Date */}
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-medium">Position</label>
              <input
                className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter your position"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-medium">Signature</label>
              <input
                className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
                type="text"
                placeholder="Enter signature"
              />
            </div>{" "}
            <div className="flex flex-col space-y-2">
              <label className="mb-2 font-medium">Date</label>
              <input
                className="border border-gray-300 rounded-md p-1 focus:ring focus:ring-primary focus:outline-none"
                type="date"
              />
            </div>
          </div>
        </div>
        <button className="text-white bg-primary py-3 px-10 float-right my-8 rounded-lg">Submit</button>
      </form>
    </>
  );
};

export default QuestionnaireForm;
