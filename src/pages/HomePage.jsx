import React from "react";
import HeaderFile from "../components/HeaderFile";
import ClientInvoiceDetails from "../components/ClientInvoiceDetails";
import ItemTable from "../components/ItemTable";
import SummarySection from "../components/SummarySection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <>
      <HeaderFile />
      <div className="container mx-auto px-4 py-6 bg-white">
        <ClientInvoiceDetails className="pt-4" />
        <ItemTable className="pt-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {/* Left Column */}
          <div className="space-y-4">
            <FooterSection />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <SummarySection />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
