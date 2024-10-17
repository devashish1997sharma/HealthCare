import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import BasicTable from "../../components/Tabel/BasicTable";

export const Summary = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubCategory(""); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box bgcolor={"white"} height={"100vh"}>
          <Box sx={{ minWidth: 120 }} pt={2} px={1}>
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

          <Box sx={{ minWidth: 120 }} my={1} p={1}>
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
          <Divider />
          <Box sx={{ minWidth: 120 }} py={2} px={1}>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Select API</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                label="Select API"
              >
                <MenuItem value={"Database"}>Database</MenuItem>
                <MenuItem value={"Application"}>Application</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider />
          <Box sx={{ minWidth: 120 }} my={2} px={1}>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">
                Prior Auth document
              </InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                label="Prior Auth document"
              >
                <MenuItem value={"Database"}>Database</MenuItem>
                <MenuItem value={"Application"}>Application</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider />
          <Box px={1} my={2}>
            <TextField
              fullWidth
              id="creativeIdentification"
              label="Appionment"
            />
          </Box>
          <Divider />
          <Box px={1} my={2}>
            <TextField
              fullWidth
              id="creativeIdentification"
              label="Enter Patient ID"
            />
          </Box>

          <Divider />
          <Box px={1} my={2}>
            <TextField
              fullWidth
              id="creativeIdentification"
              label="Prior Authization"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor={"white"} height={"100vh"}>
          <Box display={"flex"} justifyContent={"flex-end"} py={2} px={1}>
            Customer ID: 12345
          </Box>
          <BasicTable />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box bgcolor={"white"} height={"100vh"} padding={1}>
          <Box height={"40%"}>
            <Typography variant="h6">Agent</Typography>
          </Box>
          <Divider />
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "10px", my: "1rem" }}
          >
            Approve Patients
          </Button>
          <Divider />
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "10px", my: "1rem" }}
          >
            Approve Appointmetns
          </Button>
          <Divider />
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "10px", my: "1rem" }}
          >
            Send Status
          </Button>
          <Divider />
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "10px", my: "1rem" }}
          >
            Approve Appointmetns
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
