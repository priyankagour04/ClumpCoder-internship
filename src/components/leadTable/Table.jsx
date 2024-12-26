import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Table = () => {
  // Example mock data for 15 columns + action column
  const data = [
    { id: 1, col1: '1224/000001', col2: 'ISO 9001', col3: 'IRQS', col4: 'Internal', col5: ' Hot', col6: 'Call Back', col7: 'Software Developer', col8: 'N/A ', col9: 'India', col10: 'N/A ', col11: 'City', col12: 'Thomas', col13: 'N/A', col14: '2024-12-10T05:13:25.000Z', col15: '2024-12-10T05:13:25.000Z' },
    { id: 2, col1: '1224/000001', col2: 'ISO 9001', col3: 'IRQS', col4: 'Internal', col5: ' Hot', col6: 'Call Back', col7: 'Software Developer', col8: 'N/A ', col9: 'India', col10: 'N/A ', col11: 'City', col12: 'Thomas', col13: 'N/A', col14: '2024-12-10T05:13:25.000Z', col15: '2024-12-10T05:13:25.000Z' },
    { id: 3, col1: '1224/000001', col2: 'ISO 9001', col3: 'IRQS', col4: 'Internal', col5: ' Hot', col6: 'Call Back', col7: 'Software Developer', col8: 'N/A ', col9: 'India', col10: 'N/A ', col11: 'City', col12: 'Thomas', col13: 'N/A', col14: '2024-12-10T05:13:25.000Z', col15: '2024-12-10T05:13:25.000Z' },

  ];
  const navigate = useNavigate();  

  const [selectedAction, setSelectedAction] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleActionChange = (action, rowId) => {
    setSelectedAction(action);
    console.log('Action Selected:', action);
    if (action === 'View') {
      // Navigate to lead details route with rowId
      navigate(`/leads/details`);
    }
  };

  const handleDropdownToggle = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="mt-5 bg-white">
      <div className="overflow-x-scroll ">
        <table className=" table-auto ">
          <thead className="bg-gray-50 ">
            <tr className=''>
              {/* Column headers */}
              <th className="px-6 py-2 ">Lead Ref No.</th>
              <th className="px-6 py-2 ">Requirement For</th>
              <th className="px-6 py-2 ">Company Name</th>
              <th className="px-6 py-2 ">Source Of Lead</th>
              <th className="px-6 py-2 ">Lead Type</th>
              <th className="px-6 py-2 ">Lead Status</th>
              <th className="px-6 py-2 ">Designation</th>
              <th className="px-6 py-2 ">Email</th>
              <th className="px-6 py-2 ">Country</th>
              <th className="px-6 py-2 ">State</th>
              <th className="px-6 py-2 ">City</th>
              <th className="px-6 py-2 ">BD Executive Name</th>
              <th className="px-6 py-2 ">None</th>
              <th className="px-6 py-2 ">Created Date</th>
              <th className="px-6 py-2 ">Modified Date</th>
              <th className="px-6 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                onMouseLeave={handleMouseLeave}
                className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
              >
                <td className="px-4 py-2 border">{row.col1}</td>
                <td className="px-4 py-2 border">{row.col2}</td>
                <td className="px-4 py-2 border">{row.col3}</td>
                <td className="px-4 py-2 border">{row.col4}</td>
                <td className="px-4 py-2 border">{row.col5}</td>
                <td className="px-4 py-2 border">{row.col6}</td>
                <td className="px-4 py-2 border">{row.col7}</td>
                <td className="px-4 py-2 border">{row.col8}</td>
                <td className="px-4 py-2 border">{row.col9}</td>
                <td className="px-4 py-2 border">{row.col10}</td>
                <td className="px-4 py-2 border">{row.col11}</td>
                <td className="px-4 py-2 border">{row.col12}</td>
                <td className="px-4 py-2 border">{row.col13}</td>
                <td className="px-4 py-2 border">{row.col14}</td>
                <td className="px-4 py-2 border">{row.col15}</td>
                <td className="px-4 py-2 border">
                <div className="relative">
  <button
    className="text-blue-500 hover:text-blue-600"
    onClick={() => handleDropdownToggle(row.id)}
  >
    Actions
  </button>
  {activeDropdown === row.id && (
    <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-50">
      {/* Add z-50 class here */}
      <ul className="py-2">
        <li>
          <button
            onClick={() => handleActionChange('View', row.id)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            View
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActionChange('Edit', row.id)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Edit
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActionChange('Delete')}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  )}
</div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
