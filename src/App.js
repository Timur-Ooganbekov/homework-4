import React from "react";

class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { fullName, phoneNumber, email } = this.state;
        const formData = {
            fullName,
            phoneNumber,
            email
        };
        alert(JSON.stringify(formData));
    };

    handleChange  = (event) => {
        const { name,value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { fullName, phoneNumber, email } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="registration-form">
                <div>
                    <input
                        type="text"
                        placeholder="ФИО"
                        name="fullName"
                        value={fullName}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default RegistrationForm;