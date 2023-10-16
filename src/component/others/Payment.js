import React, { useState } from 'react';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');

  return (
    <div className="tour_booking_form_box">
      <div className="booking_payment_boxed">
        <form action="!#" id="payment_checked">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paymentCard"
              value="card"
              checked={selectedPaymentMethod === 'card'}
              onChange={() => setSelectedPaymentMethod('card')}
            />
            <label className="form-check-label" htmlFor="paymentCard">
              Payment by card
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paymentPaypal"
              value="paypal"
              checked={selectedPaymentMethod === 'paypal'}
              onChange={() => setSelectedPaymentMethod('paypal')}
            />
            <label className="form-check-label" htmlFor="paymentPaypal">
              Paypal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paymentPayoneer"
              value="payoneer"
              checked={selectedPaymentMethod === 'payoneer'}
              onChange={() => setSelectedPaymentMethod('payoneer')}
            />
            <label className="form-check-label" htmlFor="paymentPayoneer">
              Payoneer
            </label>
          </div>
          <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            value="white"
                          />
                          <label className="form-check-label" for="flexRadioDefault4">
                            Cash on delivery
                          </label>
                        </div>

          {selectedPaymentMethod === 'card' && (
            <div className="payment_card payment_toggle red">
            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Card number"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Cardholder name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Date of expiry"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Security code"
                                  />
                                </div>
                              </div>
                            </div>
            </div>
          )}

          {selectedPaymentMethod === 'paypal' && (
            <div className="paypal_payment payment_toggle green">
            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Email Address"
                                  />
                                </div>
                              </div>
                            </div>
            </div>
          )}

          {selectedPaymentMethod === 'payoneer' && (
            <div className="payoneer_payment payment_toggle black">
            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control bg_input"
                                    placeholder="Email Address"
                                  />
                                </div>
                              </div>
                            </div>
            </div>)
          }
        </form>
      </div>
    </div>
  );
};

export default Payment;
