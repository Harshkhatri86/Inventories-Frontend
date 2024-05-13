import { useState } from 'react';
import Input from '../../component/Input/Input'; // Assuming the correct path to your Input component
import Button from '../../component/Button/Button'; // Assuming the correct path to your Button component
import { useNavigate } from 'react-router-dom';
import LoginPageImage from '../../assets/Trade-Login.png'
import { toast } from 'react-toastify';
import { loginAPI } from '../../api/auth';

function LoginForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        // Check if the username contains whitespaces
        const hasWhitespace = /\s/.test(value);
        if (name === 'username' && hasWhitespace) {
            setFormErrors({ ...formErrors, [name]: 'Username cannot contain whitespaces' });
        } else {
            setFormErrors({ ...formErrors, [name]: '' });
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // Validate form fields
        let isValid = true;
        const newErrors = { ...formErrors };

        if (formData.username.trim() === '') {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            isValid = false;
        }
        setFormErrors(newErrors);
        if (isValid) {
            try {
                const response = await loginAPI(formData);
                navigate("/")
                sessionStorage.setItem("Token", JSON.stringify(response.body.data.token))
                toast.success("Login successfull")
            } catch (error: any) {
                console.error("Cannot login:", error);
                toast.error("Cannot Login")
            }
        }
    };

    return (
        <div className='flex flex-row'>
            <img src={LoginPageImage} alt="" className='h-screen w-6/12' />
            <div className='w-6/12  gap-10 border border-gray-400 flex flex-col items-center justify-center overflow-y-scroll'>
                <h1 className='text-4xl font-semibold'>Get Started Now</h1>
                <div className="flex w-4/5 justify-center ">

                    <form onSubmit={handleSubmit} className="w-4/5 flex flex-col gap-6">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            error={formErrors.username}
                            autoFocus
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={formErrors.password}
                        />
                        <Button title="Sign In" isPrimary onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
