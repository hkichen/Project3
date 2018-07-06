import React from "react";
import './Navbar.css';

const Navbar = () => (
  <div class="navbar">
  <div class="navbar-inner">
    <div class="container">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <a class="brand" href="#">BillsBuster</a>
      <div class="nav-collapse">
        <ul class="nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Log Out</a></li>
            <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Options <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="/addExpense">Add an Expense</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Another Action</a></li>
            </ul>
          </li>                    
        </ul>    
      </div>{/*<!-- /.nav-collapse -->*/}
    </div>
  </div>{/*<!-- /navbar-inner --> */}
</div>
);

export default Navbar;
