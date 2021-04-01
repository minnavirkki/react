import React, { Component } from "react";

const handleClick = () => {
    console.log("Wow");
};

const Box = (props) => {
    return (
        <div className="box">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Title: {props.title}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

class Main extends Component {
state = {
    persons : [
        {
            name: "Nakki",
            age: 3,
            title: "Dog",
        },
        {
            name: "Sipsi",
            age: 5,
            title: "Cat",
        },
        {
            name: "Konna",
            age: 10,
            title: "Turtle",
        },
    ],
};

handleClick = () => {
    this.setState({
        persons: [
            {
                name: "Kaarle",
                age: 3,
                title: "Dog",
            },
            {
                name: "Marco",
                age: 5,
                title: "Cat",
            },
            {
                name: "Lenni",
                age: 10,
                title: "Turtle",
            },
        ],
    });
};

    render(){
        return (
            <main>
                <button onClick={this.handleClick}>Click me main page</button>
                <div>
                    <Box
                    name={this.state.persons[0].name} age={this.state.persons[0].age} title={this.state.persons[0].title}
                    />
                    <Box
                    name={this.state.persons[1].name} age={this.state.persons[1].age} title={this.state.persons[1].title}
                    />
                    <Box
                    name={this.state.persons[2].name} age={this.state.persons[2].age} title={this.state.persons[2].title}
                    />
                </div>
            </main>
        );
    };
};

export default Main;