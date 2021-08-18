import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const teamList = [
  { teamName: "Jason" },
  { teamName: "Steve" },
  { teamName: "Ryan" },
]

function SimpleForm() {
  const [formValues, setFormValues] = useState({ teamName: "" })
  const [person, setPerson] = useState(teamList)

  const change = (event) => {
    const { name, value } = event.target

    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault()
    const newPerson = {
      teamName: formValues.teamName,
    }

    setPerson(person.concat(newPerson))
    setFormValues({ teamName: "" })
  }

  return (
    <div className="container">
      <h1>Team Members Form</h1>
      <form onSubmit={submit}>
        <label>
          Members Name
          <input
            type="text"
            name="teamMember"
            value={formValues.teamName}
            onChange={change}
          />
        </label>
        <input type="submit" value="CREATE YOUR TEAM" />
      </form>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
