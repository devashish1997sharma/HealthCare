import React, { useState } from "react";
import "./system.css";
import BasicTable from "../../components/Tabel/BasicTable";
import AudienceOverview from "../../components/Chats/AudienceOverview";
import SalesByCountriesChart from "../../components/Chats/SalesByCountriesChart";
import LiveVisitsChart from "../../components/Chats/LiveVisitsChart";
import Features from "../../components/Features";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const System = () => {
  const [activeChart, setActiveChart] = useState();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubCategory(""); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const renderActiveChart = () => {
    switch (activeChart) {
      case "audience":
        return <AudienceOverview />;
      case "live":
        return <LiveVisitsChart />;
      case "sales":
      default:
        return <SalesByCountriesChart />;
    }
  };

  return (
    <div className="container">
      <div className="box box1">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value={"Database"}>Database</MenuItem>
              <MenuItem value={"Application"}>Application</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }} mt={2}>
          <FormControl fullWidth>
            <InputLabel id="subcategory-select-label">Subcategory</InputLabel>
            <Select
              labelId="subcategory-select-label"
              id="subcategory-select"
              value={subCategory}
              onChange={handleSubCategoryChange}
              label="Subcategory"
              disabled={!category} // Disable until a category is selected
            >
              {/* Return an array of MenuItem components directly */}
              {category === "Database" && [
                <MenuItem key="mysql" value={"MySQL"}>
                  MySQL
                </MenuItem>,
                <MenuItem key="postgresql" value={"PostgreSQL"}>
                  PostgreSQL
                </MenuItem>,
              ]}
              {category === "Application" && [
                <MenuItem key="frontend" value={"Frontend"}>
                  Frontend
                </MenuItem>,
                <MenuItem key="backend" value={"Backend"}>
                  Backend
                </MenuItem>,
              ]}
            </Select>
          </FormControl>
        </Box>

        {/* Second Section - Saved Queries */}
        <div className="saved-queries-section">
          <h4>Saved Queries</h4>
          <ul>
            <li>Query 1: SELECT * FROM users;</li>
            <li>Query 2: SELECT name FROM products;</li>
            <li>Query 3: DELETE FROM orders WHERE id = 10;</li>
          </ul>
        </div>

        {/* Separator */}
        <div className="separator"></div>

        {/* Third Section - Query Input */}
        <div className="query-input-section">
          <h4>Enter Query:</h4>
          <textarea rows="5" placeholder="Type your query here..."></textarea>
        </div>
      </div>

      <div class="box2">
        <div class="customer-id">Customer ID: 12345</div>
        <Box display="flex" flexDirection="column">
          <BasicTable />
          <Box sx={{ background: "#f5f5f5", padding: 2 }}>
            <Features />
          </Box>
        </Box>
        <Typography as="h3" ml={2} my={2}>
          Chart Representation
        </Typography>
        {renderActiveChart()}

        <div class="separator"></div>

        <div className="chart-buttons">
          <button className="chart-btn" onClick={() => setActiveChart("sales")}>
            Chart
          </button>
          <button
            className="chart-btn"
            onClick={() => setActiveChart("audience")}
          >
            Bar
          </button>
          <button className="chart-btn" onClick={() => setActiveChart("live")}>
            Pie Chart
          </button>
        </div>
      </div>

      <div class="box3">
        <h2 class="agents-heading">Agents</h2>
        <div class="separator"></div>

        <div class="clickable-divs">
          <div class="clickable-div">Approve Patients</div>
          <div class="separator"></div>

          <div class="clickable-div">Approve Appointments</div>
          <div class="separator"></div>

          <div class="clickable-div">Send Status</div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  );
};

export default System;
