import React, { Component } from "react";

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.customersArray = props.customers;
    // console.log(this.customersArray);
  }
  render() {
    return (
      <div>
        <h2 className="header">Appointments</h2>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Appointment Time</th>
            </tr>
          </thead>
          <tbody>
            {this.customersArray.map((customer, index) => (
              <tr key={index}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.appointmentTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
