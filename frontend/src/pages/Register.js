import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3001/api/users/register", {
        username,
        email,
        password,
      })
      navigate("/login")
    } catch (error) {
      alert("Registration failed")
    }
  }

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
