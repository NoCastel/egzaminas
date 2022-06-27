import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { login } from "../../Functions/auth";

function LoginPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [invalid, setInvalid] = useState('');

    const signIn = () => {
        axios.post('http://localhost:6174/login/sign-in', { user, pass })
            .then(res => {
                if ('error' === res.data.msg) {
                    setInvalid('invalid username or password')
                } else if ('admin' === res.data.msg || 'boss' === res.data.msg) {
                    login(res.data.key);
                    navigate('/admin', { replace: true });
                } else {
                    login(res.data.key);
                    navigate('/backUser', { replace: true });
                }
            })
    }
    return (
        <div className="flex items-center justify-center bg-sky-50 h-screen">
            <div className="bg-white shadow rounded-lg px-6 py-12 flex flex-col w-1/3">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p><label className="bg-white text-gray-600 px-1">Username *</label></p>
                        </div>
                        <p>
                            <input id="username" type="text" className="py-1 px-1 outline-none block h-full w-full" value={user} onChange={e => setUser(e.target.value)} />
                        </p>
                    </div>
                    <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label className="bg-white text-gray-600 px-1">Password *</label>
                            </p>
                        </div>
                        <p>
                            <input id="password" type="password" className="py-1 px-1 outline-none block h-full w-full" value={pass} onChange={e => setPass(e.target.value)} />
                        </p>
                    </div>
                </div>
                <div className="px-1 pt-2 text-red-500 text-sm">{invalid}</div>
                <div className="mt-4 pt-2">
                    <button className="rounded text-gray-100 px-3 py-1 bg-sky-500 hover:shadow-inner hover:bg-sky-700 transition-all duration-300" onClick={signIn}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;