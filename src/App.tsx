import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarDetailsCard from "./components/cardDetailsCard";
import { Filter } from "./components/filter";
import { data } from "./data";

function App() {
  const [cars, setCars] = useState(data);
  const [state, setState] = useState<{
    year: string[];
    brand: string[];
    model: string[];
  }>({
    year: [],
    brand: [],
    model: [],
  });

  const year: string[] = [];
  let model: string[] = [];
  let brand: string[] = [];

  const brands = [...new Set(data.map((car) => car.brand).sort())];
  const models = [...new Set(data.map((car) => car.model).sort())];
  const years = [...new Set(data.map((car) => car.year).sort())];

  const filterConfigs = [
    { label: "brand", filterValues: brands },
    { label: "model", filterValues: models },
    { label: "year", filterValues: years },
  ];

  useEffect(() => {
    if (cars.length <= 0) {
      setCars(data);
    }
  }, [cars]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "year") {
      const id = year.findIndex((y) => y === event.target.value);
      if (event.target.checked && id < 0) {
        year.push(event.target.value);
      } else {
        year.splice(id, 1);
      }

      setState({
        ...state,
        [event.target.name]: year,
      });

      setCars(cars.filter((car) => year.includes(car.year)));
    } else if (event.target.name === "model") {
      const id = model.findIndex((y) => y === event.target.value);
      if (event.target.checked && id < 0) {
        model.push(event.target.value);
      } else {
        model.splice(id, 1);
      }
      setState({
        ...state,
        [event.target.name]: model,
      });
      setCars(cars.filter((car) => model.includes(car.model)));
    } else if (event.target.name === "brand") {
      const id = brand.findIndex((y) => y === event.target.value);
      if (event.target.checked && id < 0) {
        brand.push(event.target.value);
      } else {
        brand.splice(id, 1);
      }
      setState({
        ...state,
        [event.target.name]: brand,
      });
    }
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Car Dekho
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All new
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} p={16}>
        <Grid item xs={2}>
          {filterConfigs.map(({ label, filterValues }) => (
            <Filter
              key={label}
              category={label}
              filters={filterValues}
              handleChange={handleChange}
            />
          ))}
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={{ xs: 4 }}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={3} key={car.id}>
                <CarDetailsCard car={car} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
