import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
  root: {}
}));

const InsertCar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    carServiceName: '',
    licensePlateNumber: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    city: '',
    country: '',
    description: ''
  });

  const [state, setState] = React.useState({
    airConditioning:false,
    automaticGearbox:false,

    cancellation:false,
    theftProtection:false,
    airportCharge:false,
    yourRentalIncludesUnlimitedFreeKilometres:false,
    amendments:false,
    collisionDamageWaiver:false,
    localTaxes:false,
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setState({ ...state, [event.target.name]: event.target.value });
  };



  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information must be complete"
          title="Insert a new car"
        />
        <Divider />
        <CardHeader
          title="Information"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name of car"
                margin="dense"
                name="carServiceName"
                onChange={handleChange}
                required
                value={values.carServiceName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="License Plate Number"
                margin="dense"
                name="licensePlateNumber"
                onChange={handleChange}
                required
                value={values.licensePlateNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Price for room $"
                margin="dense"
                name="price"
                onChange={handleChange}
                type="number"
                value={values.price}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
	    <Grid
              item
	            md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                margin="dense"
                name="description"
                onChange={handleChange}
                value={values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader
          title="Services:"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="airConditioning"
          			onChange={handleChange}
          			value={state.airConditioning} />}
          	            label="Air Conditioning"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="automaticGearbox"
          			onChange={handleChange}
          			value={state.automaticGearbox} />}
          	            label="Automatic gearbox"
          	          />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader
          title="Included in the price:"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="cancellation"
          			onChange={handleChange}
          			value={state.cancellation} />}
          	            label="Cancellation"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="theftProtection"
          			onChange={handleChange}
          			value={state.theftProtection} />}
          	            label="Theft Protection"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="airportCharge"
          			onChange={handleChange}
          			value={state.airportCharge} />}
          	            label="Airport Charge"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="yourRentalIncludesUnlimitedFreeKilometres"
          			onChange={handleChange}
          			value={state.yourRentalIncludesUnlimitedFreeKilometres} />}
          	            label="Your Rental Includes Unlimited Free Kilometres"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="amendments"
          			onChange={handleChange}
          			value={state.amendments} />}
          	            label="Amendments"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="collisionDamageWaiver"
          			onChange={handleChange}
          			value={state.collisionDamageWaiver} />}
          	            label="Collision Damage Waiver"
          	          />
            </Grid>
            <Grid
              item
	            md={4}
              sm={6}
              xs={12}
            >
          		<FormControlLabel
          	            control={<Checkbox
          			name="localTaxes"
          			onChange={handleChange}
          			value={state.localTaxes} />}
          	            label="Local Taxes"
          	          />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save Car
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

InsertCar.propTypes = {
  className: PropTypes.string
};

export default InsertCar;
