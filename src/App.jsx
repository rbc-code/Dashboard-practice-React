import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Home from './Home';
import Update from './Update';
import Edit from './Edit';
import Delete from './Delete';

function Dashboard() {
    return (
        <Router>
            <div className="container mt-4">
                <h1 className="text-center">MyCarShop Dashboard</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">MyCarShop</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/update">Update</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/edit">Edit</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/delete">Delete</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/delete" element={<Delete />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Dashboard;

