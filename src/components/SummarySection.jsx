import React, { useState } from "react";

function SummarySection() {
  const [isPaid, setIsPaid] = useState(false);

  // Dummy items for calculations
  const items = [
    { id: 1, itemName: "Product A", qty: 2, price: 500, discount: 5, tax: 18 },
    { id: 2, itemName: "Product B", qty: 1, price: 1000, discount: 10, tax: 18 },
    { id: 3, itemName: "Service C", qty: 3, price: 300, discount: 0, tax: 5 },
  ];

  // Calculating subtotal, tax, and total
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalDiscount = items.reduce(
    (sum, item) => sum + item.qty * item.price * (item.discount / 100),
    0
  );
  const totalTax = items.reduce(
    (sum, item) =>
      sum +
      item.qty * item.price * (1 - item.discount / 100) * (item.tax / 100),
    0
  );
  const totalAmount = subtotal - totalDiscount + totalTax;

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 w-full max-w-lg mx-auto sm:max-w-xl">
      <div className="space-y-4">
        {/* Total Discount */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-dashed pb-2">
          <span className="text-gray-600 text-sm sm:text-base">Total Discount</span>
          <span className="font-medium text-red-500 text-sm sm:text-base">
            - ₹{totalDiscount.toFixed(2)}
          </span>
        </div>

        {/* Taxable Amount */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-dashed pb-2">
          <span className="text-gray-600 text-sm sm:text-base">Taxable Amount</span>
          <span className="font-medium text-sm sm:text-base">₹{subtotal.toFixed(2)}</span>
        </div>

        {/* Additional Charges */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-dashed pb-2">
          <button className="text-blue-500 hover:underline text-sm sm:text-base">
            + Add Additional Charges
          </button>
          <span className="font-medium text-sm sm:text-base">₹0.00</span>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between text-lg sm:text-xl font-semibold">
          <span>Total Amount</span>
          <span className="text-green-600">₹{totalAmount.toFixed(2)}</span>
        </div>

        {/* Mark as Paid Toggle */}
        <div className="flex items-center justify-between mt-4 w-full">
          <label htmlFor="markAsPaid" className="text-gray-600 text-sm sm:text-base">
            {isPaid ? "Paid" : "Mark as Paid"}
          </label>

          {/* Toggle Switch */}
          <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all ${
              isPaid ? "bg-green-500" : ""
            }`}
            onClick={() => setIsPaid(!isPaid)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
                isPaid ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummarySection;
