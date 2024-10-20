import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3001/api/users/login", {
        email,
        password,
      })
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate("/")
    } catch (error) {
      alert("Login failed")
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
