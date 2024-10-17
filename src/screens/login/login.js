import React, { useState } from 'react';
import './login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput } from '../../components';

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginClick = () => {
        // Check if all fields are filled
        if (inputValue && userId && pass) {
            alert('Login Successfully!');
            navigate('/dashboard')
        } else {
            alert('Please fill all details');
        }
    };

    return (
        <div className="SplitScreen">
            <h1>Login</h1>
            <TextInput
                placeholder="Enter Customer ID"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                centerPlaceholder // Pass a prop to indicate centered placeholder
            />
            <TextInput
                icon={<FaUser />} // Example icon
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <TextInput
                icon={<FaLock />} // Example icon
                placeholder="Enter Password"
                type="password"
                showPassword={showPassword}
                handleTogglePassword={handleTogglePassword}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <Button
                label="Login"
                onClick={handleLoginClick}
                variant="primary"
                size="medium"
                style={{ marginTop: '20px' }} // Optional margin
            />
        </div>
    );

}

export default Login;