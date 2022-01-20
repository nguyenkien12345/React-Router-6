import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import ExpenseDetail from './pages/ExpenseDetail';
import Expenses from './pages/Expenses';
import InvoiceDetail from './pages/InvoiceDetail';
import Invoices from './pages/Invoices';
import NewExpense from './pages/NewExpense';
import NewInvoice from './pages/NewInvoice';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='invoices' element={<Invoices/>}>
            <Route index element={<h2>Please Select Invoices</h2>}/>
            <Route path=':invoiceId' element={<InvoiceDetail/>} />
            <Route path='newInvoice' element={<NewInvoice/>} />
          </Route>
          <Route path='expenses' element={<Expenses/>}>
            <Route index element={<h2>Please Select Expenses</h2>}/>
            <Route path=':expenseId' element={<ExpenseDetail/>} />
            <Route path='newExpense' element={<NewExpense/>} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// * có nghĩa là không tìm thấy route nào match cả => Trả về Component Not Found

// Nested Routes (Route nằm trong Route). Component App sẽ là thằng chung chỉ thay đổi giao diện hiển thị bên dưới

// Khi vào /         nó sẽ chỉ hiển thị ra vừa giao diện App
// Khi vào invoices nó sẽ vừa hiển thị ra vừa giao diện App, vừa hiển thị giao diện Invoices 
// Khi vào expenses nó sẽ vừa hiển thị ra vừa giao diện App, vừa hiển thị giao diện Expenses 

// /invoices/:invoiceId; /expenses/:expenseId => Relative Link => Các Route con sẽ nối vào Route cha 
// (Route cha sẽ là thằng bọc Route con) (Route con không cần / phía trước nó khi khai báo path trong route)

// Khi route là /invoices => chạy file index của invoices
// Khi route là /expenses => chạy file index của expenses

// Trong react router version 5 để kiểm tra chính xác 1 đường dẫn ta sẽ dùng exact nhưng trong react router version 6 nó sẽ tự đi kiếm cái đường dẫn mà nó nằm gần nhất, phù hợp nhất để lấy
// Vd Ta có 2 đường dẫn /invoices/:invoiceId/ và /invoices/new thì ở version 6 nó sẽ kiểm tra nếu ta gõ vào /invoices/new thì nó sẽ lấy chữ new ra so sánh và thấy giống đường dẫn /invoices/new hơn


