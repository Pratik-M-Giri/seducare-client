  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useAuth } from "./AuthContext";
  import axios from "axios";
  import './Login.css'; // Import the custom CSS file
  import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth(); // Use login from AuthContext
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
        setMessage(response.data.message);
        setError('');

        login(); // Set authenticated state
        navigate('/admin-dashboard');
      } catch (err) {
        setMessage('');
        setError(err.response ? err.response.data.message : 'An error occurred');
      }
    };

    return (
      <div className="Login-container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header text-center bg-warning text-white">
                <h5 className="mb-0 text-black">Admin Login Only</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-warning w-100">Login</button>
                </form>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Login;
