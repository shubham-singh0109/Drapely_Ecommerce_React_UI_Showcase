import React from "react";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

    const Checkout = () => {
      const state = useSelector((state) => state.handleCart);

      const EmptyCart = () => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 py-5 bg-light text-center">
                <h4 className="p-3 display-5">No item in Cart</h4>
                <Link to="/" className="btn btn-outline-dark mx-4">
                  <i className="fa fa-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        );
      };

      const ShowCheckout = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;
        state.map((item) => {
          return (subtotal += item.price * item.qty);
        });

        state.map((item) => {
          return (totalItems += item.qty);
        });

        const [cvv, setCvv] = useState('');
        const [cardnumber, setCN] = useState('');

        const handleCNChange = (event) => {
          const { value } = event.target;
          if (/^\d{0,12}$/.test(value)) {
            setCN(value);
          }
        };

        const handleCvvChange = (event) => {
          const { value } = event.target;
          if (/^\d{0,3}$/.test(value)) {
            setCvv(value);
          }
        };

        return (
          <>
            <div className="container py-5">
              <div className="row my-4">
                <div className="col-md-5 col-lg-4 order-md-last">
                  <div className="card mb-4">
                    <div className="card-header py-3 bg-light">
                      <h5 className="mb-0">Order Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products ({totalItems})<span>${Math.round(subtotal)}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>${shipping}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                          </div>
                          <span>
                            <strong>${Math.round(subtotal + shipping)}</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h4 className="mb-0">Billing address</h4>
                    </div>
                    <div className="card-body">
                      <form className="needs-validation" novalidate>
                        <div className="row g-3">
                          <div className="col-sm-6 my-1">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>

                          <div className="col-sm-6 my-1">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>

                          <div className="col-12 my-1">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="you@example.com"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email address for shipping
                              updates.
                            </div>
                          </div>

                          <div className="col-12 my-1">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="1234 Main St"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your shipping address.
                            </div>
                          </div>

                          <div className="col-12">
                            <label htmlFor="address2" className="form-label">
                              Address 2{" "}
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address2"
                              placeholder="Apartment or suite"
                            />
                          </div>

                          <div className="col-md-5 my-1">
                            <label htmlFor="country" className="form-label">
                              Country
                            </label>
                            <br />
                            <select className="form-select" id="country" required>
                              <option value="">Choose...</option>
                              <option>United States</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>

                          <div className="col-md-4 my-1">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <br />
                            <select className="form-select" id="state" required>
                              <option value="">Choose...</option>
                              <option> Massachusetts</option>
                              <option>Arizona</option>
                              <option>Washington</option>
                              <option>California</option>
                            </select>
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>

                          <div className="col-md-3 my-1">
                            <label htmlFor="zip" className="form-label">
                              Zip
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Payment</h4>

                        <Card
                        variant="outlined"
                        sx={{
                          maxHeight: 'max-content',
                          maxWidth: '100%',
                          mx: 'auto',
                          overflow: 'auto',
                          resize: 'horizontal',
                        }}
                      >
                        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                          Add new card
                        </Typography>
                        <Divider inset="none" />
                        <CardContent
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                          }}
                        >
                          <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Card number</FormLabel>
                            <Input 
                            endDecorator={<CreditCardIcon />} 
                            type="text"
                            value={cardnumber}
                            onChange={handleCNChange}
                            placeholder="Enter 12 digits of your card"
                            required
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Expiry date</FormLabel>
                            <div>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={['DatePicker']}>
                              <DatePicker label="mm/dd/yyyy" />
                              </DemoContainer>
                              </LocalizationProvider>
                           </div>
                          </FormControl>
                          <FormControl>
                            <FormLabel>CVC/CVV</FormLabel>
                            <Input 
                            endDecorator={<InfoOutlined/>} 
                            type="password"
                            value={cvv}
                            onChange={handleCvvChange}
                            placeholder=""
                            required
                            />
                          </FormControl>
                          <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Card holder name</FormLabel>
                            <Input 
                            placeholder="Enter cardholder's full name"
                            required 
                            />
                          </FormControl>
                          <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
                          <CardActions sx={{ gridColumn: '1/-1' }}>
                          </CardActions>
                        </CardContent>
                        </Card>
                        <hr className="my-4" />

                        <button
                          className="w-100 btn btn-primary"
                          type="submit"
                        >
                          Continue to checkout
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      };

      return (
        <>
          <Navbar />
          <div className="container my-3 py-3">
            <h1 className="text-center">Checkout</h1>
            <hr />
            {state.length ? <ShowCheckout /> : <EmptyCart />}
          </div>
          <Footer />
        </>
      );
    };

    export default Checkout;
