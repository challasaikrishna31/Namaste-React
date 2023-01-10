const heading = React.createElement("h1", { id: "title1" }, "Namaste React in React!!!!!!!!!!!");
const heading2 = React.createElement("h1", { id: "title1" }, "Namaste React in React Heading2!!!!!!!!!!!");
const container = React.createElement("div", { id: "container" }, [heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading)
root.render(container); //heading is rendered in root div