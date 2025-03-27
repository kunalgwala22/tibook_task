import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react"; // Import plus/minus icons

function FooterSection() {
  const [showNotes, setShowNotes] = useState(false); // Toggle for Notes
  const [showTerms, setShowTerms] = useState(false); // Toggle for Terms & Conditions

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 w-full max-w-lg mx-auto sm:max-w-xl">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Notes & Terms</h2>

      <div className="space-y-6">
        {/* Notes Section */}
        <div>
          <button
            onClick={() => setShowNotes(!showNotes)}
            className="flex items-center text-blue-500 hover:underline text-sm sm:text-base"
          >
            {showNotes ? (
              <MinusCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <PlusCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            )}
            {showNotes ? "Hide Notes" : "Add Notes"}
          </button>

          {showNotes && (
            <textarea
              id="notes"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              rows="3"
              placeholder="Add any notes for the client..."
            ></textarea>
          )}
        </div>

        {/* Terms & Conditions Section */}
        <div>
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="flex items-center text-blue-500 hover:underline text-sm sm:text-base"
          >
            {showTerms ? (
              <MinusCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <PlusCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            )}
            {showTerms ? "Hide Terms & Conditions" : "Add Terms & Conditions"}
          </button>

          {showTerms && (
            <textarea
              id="terms"
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              rows="3"
              placeholder="Add terms and conditions here..."
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
