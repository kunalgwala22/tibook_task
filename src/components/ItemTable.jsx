import React, { useState } from "react";

function ItemTable() {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "Product A",
      hsnCode: "1234",
      description: "This is product A",
      qty: 2,
      price: 500,
      discount: 5,
      tax: 18,
    },
    {
      id: 2,
      itemName: "Product B",
      hsnCode: "5678",
      description: "This is product B",
      qty: 1,
      price: 1000,
      discount: 10,
      tax: 18,
    },
    {
      id: 3,
      itemName: "Service C",
      hsnCode: "9101",
      description: "Service C description",
      qty: 3,
      price: 300,
      discount: 0,
      tax: 5,
    },
  ]);

  const addNewItem = () => {
    const newItem = {
      id: items.length + 1,
      itemName: "New Item",
      hsnCode: "0000",
      description: "Description of new item",
      qty: 1,
      price: 0,
      discount: 0,
      tax: 0,
    };

    setItems([...items, newItem]);
  };

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-50 text-left text-sm text-gray-700 font-medium">
              <th className="p-3 border-l border-t border-b">NO.</th>
              <th className="p-3 border-l border-t border-b">ITEM/SERVICE</th>
              <th className="p-3 border-l border-t border-b">HSN/SAC</th>
              <th className="p-3 border-l border-t border-b">DESCRIPTION</th>
              <th className="p-3 border-l border-t border-b text-center">QTY</th>
              <th className="p-3 border-l border-t border-b text-right">PRICE</th>
              <th className="p-3 border-l border-t border-b text-right">DISCOUNT</th>
              <th className="p-3 border-l border-t border-b text-right">TAX</th>
              <th className="p-3 border-l border-t border-b text-right">AMOUNT</th>
              <th className="p-3 border-l border-t border-b text-center">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="text-sm text-gray-700 hover:bg-gray-50">
                <td className="p-3 border text-center">{index + 1}</td>
                <td className="p-3 border">{item.itemName}</td>
                <td className="p-3 border text-center">{item.hsnCode}</td>
                <td className="p-3 border">{item.description}</td>
                <td className="p-3 border text-center">{item.qty}</td>
                <td className="p-3 border text-right">₹{item.price.toFixed(2)}</td>
                <td className="p-3 border text-right">{item.discount}%</td>
                <td className="p-3 border text-right">{item.tax}%</td>
                <td className="p-3 border text-right">
                  ₹
                  {(
                    item.price *
                    item.qty *
                    (1 - item.discount / 100) *
                    (1 + item.tax / 100)
                  ).toFixed(2)}
                </td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Item Button */}
      <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:justify-between">
        <button
          onClick={addNewItem}
          className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
        >
          + Add New Item
        </button>

        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
          Create New Item
        </button>
      </div>
    </div>
  );
}

export default ItemTable;
