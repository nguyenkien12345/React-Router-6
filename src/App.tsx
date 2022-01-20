import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nguyễn Trung Kiên</h1>
      <nav style={{borderBottom: '3px solid black', paddingBottom: '1rem'}}>
        <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="invoices">Invoices</Link>
        {' '}|{' '}
        <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;

// <Outlet/> Đây là 1 component (Nó giống như là children). <Outlet/> như <App>{children}</App>. Render ra cái giao diện của đường link con trong đường link cha

// Link to = '/invoices' => Nếu mà có gạch chéo (/) ở đằng trước tên route thì gọi là absolute link => Nó sẽ đi tới domain gốc của chúng ta là localhost:3000/invoices

// Link to = 'invoices'  => Nếu mà không có gạch chéo (/) ở đằng trước tên route thì gọi là relative link => Nó sẽ nối với đường link mà cái app này được render (Mà App này được render ở đường link /home) localhost:3000/home/invoices