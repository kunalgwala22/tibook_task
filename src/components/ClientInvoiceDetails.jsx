import React from "react";

function ClientInvoiceDetails() {
  return (
    <div className="p-6 bg-white shadow rounded-lg border">
      {/* Responsive Grid for Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start md:items-center p-6">
        {/* Bill To Section */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bill To
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <select
              className="flex-1 w-full bg-white border-none outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select Client
              </option>
              <option value="Client 1">Client 1</option>
              <option value="Client 2">Client 2</option>
              <option value="Client 3">Client 3</option>
            </select>
            <button className="text-gray-500 text-sm font-medium ml-2">
              + Create New Client
            </button>
          </div>
        </div>

        {/* Invoice Details Section */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Invoice Prefix:
            </label>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800">
              AT
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sale Invoice:
            </label>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800">
              008
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sale Invoice Date:
            </label>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800">
              20-05-2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientInvoiceDetails;
