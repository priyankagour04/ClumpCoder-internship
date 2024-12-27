import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BsListTask, BsUiChecks } from "react-icons/bs";
import { GrTable } from "react-icons/gr";
import { PiChartPieSliceBold } from "react-icons/pi";
import { MdOutlineFormatIndentDecrease } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const Dropdown = ({
  icon: Icon,
  title,
  items,
  isOpen,
  onToggle,
  onItemClick,
}) => (
  <li className="mb-4">
    <button
      onClick={onToggle}
      className="font-medium flex items-center gap-3 w-full py-2 px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded"
      aria-expanded={isOpen}
    >
      <Icon />
      {title}
      <span
        className={`transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <IoIosArrowDown />
      </span>
    </button>
    <ul
      className={`pl-4 mt-2 font-semibold space-y-4 ${
        isOpen ? "block" : "hidden"
      } transition-all`}
    >
      {items.map(({ name, path, isPro }, index) => (
        <li key={index} className="flex items-center justify-between">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => onItemClick(path)} // Call the navigation function
          >
            {name}
          </button>
          {isPro && (
            <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
              Pro
            </div>
          )}
        </li>
      ))}
    </ul>
  </li>
);

const Sidebar = () => {
  const [openKey, setOpenKey] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected path
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: BsListTask,
      title: "Dashboard",
      items: [
        { name: "Opportunity", path: "/opportunity", isPro: false },
        { name: "Leads", path: "/leads", isPro: false },
      ],
    },
    {
      key: "forms",
      icon: MdOutlineFormatIndentDecrease,
      title: "Forms",
      items: [
        { name: "Form Elements", path: "/forms/elements", isPro: false },
        { name: "Pro Form Elements", path: "/forms/pro-elements", isPro: true },
      ],
    },
    {
      key: "tables",
      icon: GrTable,
      title: "Tables",
      items: [
        { name: "Table 1", path: "/tables/table1", isPro: false },
        { name: "Table 2", path: "/tables/table2", isPro: false },
      ],
    },
    {
      key: "chart",
      icon: PiChartPieSliceBold,
      title: "Chart",
      items: [
        { name: "Chart 1", path: "/charts/chart1", isPro: false },
        { name: "Chart 2", path: "/charts/chart2", isPro: true },
      ],
    },
    {
      key: "UIelements",
      icon: BsUiChecks,
      title: "UI Elements",
      items: [
        { name: "UI element 1", isPro: false },
        { name: "UI element 2", isPro: true },
      ],
    },
    {
      key: "Authentication",
      icon: RiLoginBoxLine,
      title: "Authentication",
      items: [
        { name: "Auth page", isPro: false },
        { name: "Auth logic", isPro: true },
      ],
    },
  ];

  return (
    <div className="bg-primary text-white fixed h-screen min-h-fit p-4">
      <h1 className="text-2xl flex items-center gap-3 font-bold mb-4">ADMIN</h1>
      <div>
        <h1 className="text-gray-400 flex items-center gap-3 font-semibold mb-4 ms-4 mt-10">
          Menu
        </h1>

        {/* Sidebar menu starts here */}
        {menuItems.map(({ key, icon, title, items }) => (
          <ul key={key} className="mb-6">
            <Dropdown
              icon={icon}
              title={title}
              items={items}
              isOpen={openKey === key}
              onToggle={() => toggleDropdown(key)}
              onItemClick={handleNavigation} // Pass the navigation handler
            />
            {/* Insert button between menus */}
            {key === "forms" && (
              <li className="mb-4">
                <button
                  className="font-medium flex text-start items-center w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded"
                  onClick={() => alert("Button clicked")}
                >
                  Contract Review/ Application Review
                </button>
              </li>
            )}
            {key === "forms" && (
              <li className="mb-4">
                <button
                  className="font-medium flex text-start items-center w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded"
                  onClick={() => alert("Button clicked")}
                >
                  Quotation
                </button>
              </li>
            )}
            {key === "forms" && (
              <li className="mb-4">
                <button
                  className="font-medium flex text-start items-center w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded"
                  onClick={() => handleNavigation("/questioniers/form")}
                >
                  Questionnaire{" "}
                </button>
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
