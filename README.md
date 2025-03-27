# Invoice Management System

A responsive Invoice Management System built with **React.js**, designed to streamline the creation, editing, and management of invoices. The app features itemized billing, tax and discount calculations, dynamic toggles for invoice status, and customizable notes and terms sections.

---

## **Features**

- **Item Table with Calculations**  
  - Add, edit, and delete items (products or services) from the invoice.  
  - Automatically calculates:
    - Subtotal  
    - Discounts  
    - Taxes  
    - Total amount  

- **Dynamic Payment Status**  
  - Toggle between *Paid* and *Unpaid* status using an interactive switch.

- **Notes & Terms Section**  
  - Expandable sections to add notes and terms & conditions to the invoice.

- **Responsive Design**  
  - Mobile-first design with smooth scaling on larger screens.
  - Ensures a seamless experience across devices.

---

## **Tech Stack**

- **React.js**: Core frontend framework used to build the app.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Lucide React Icons**: Icon library for dynamic plus/minus and toggle functionality.


---

## **How to Run This Project Locally**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/invoice-management-system.git

cd tibook_task

npm install
npm run dev

invoice-management-system/
│
├── src/
│   ├── components/
│   │   ├── ItemTable.js           # Handles item addition and removal, and amount calculations
│   │   ├── SummarySection.js      # Displays total, tax, discount, and payment status toggle
│   │   └── FooterSection.js       # Provides expandable sections for Notes & Terms
│   │
│   ├── App.js                     # Main app rendering the invoice components
│   └── index.js                   # Entry point of the React app
│
├── public/
│   └── index.html                 # Main HTML template
│
└── package.json                   # Project configuration and dependencies

