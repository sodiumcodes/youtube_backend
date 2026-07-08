import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login.jsx";
import { registerUser } from "../api/authAPI.js";
import { saveToken } from "../../../services/tokenService.js";
import useAuth from "../../../hooks/useAuth.js";

const Register = () => {

    // React Router hook for navigation
    const navigate = useNavigate();

    // Access setUser from AuthContext
    const { user, setUser } = useAuth();

    // Form state
    const [formData, setFormData] = useState({
        fullName:"",
        email: "",
        password: "",
    });

    // Loading state
    const [loading, setLoading] = useState(false);

    // Error message
    const [error, setError] = useState("");

    // Update form values
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit form
    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const response = await registerUser(formData);
            console.log(response);
            
            // Save access token
            saveToken(response.accessToken);

            // Save user globally
            setUser(response.user);

            // Redirect
            navigate("/discover");

        } catch (err) {
            setError(
                err.response?.data?.message || "Login failed."
            );

        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="login-container">

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {error && <p>{error}</p>}

                <button type="submit" disabled={loading}>

                    {/* {loading ? "Registering User..." :<Login/>} */}

                </button>

            </form>

            <p>

                Already have an account?

                <Link to="/login">
                    Login
                </Link>

            </p>

        </div>
    );
};

export default Register;