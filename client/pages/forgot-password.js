import { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import Link from "next/link";
import { Modal } from 'antd';

import ForgotPasswordForm from "../components/forms/forgotPasswordForm";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("")
    const [secret, setSecret] = useState("")
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email,newPassword,secret)
        try {
            setLoading(true);
            const { data } = await axios.post(`http://localhost:8000/api/forgot-password`, {
                email,
                newPassword,
                secret,
            })
            setLoading(false);
            // console.log("forgot password craeted response=>",data);
            if (data.error) {
                toast.error(data.error)
            } else {
                setOk(true)
                toast.success("Password changed");
                
            }
        } catch (error) {
            setLoading(false);
            toast(error.response.data)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-48 bg-parrot-img">
                <div className="">
                    <h1 className="font-bold text-black text-4xl ">Forgot Password</h1>
                </div>
            </div>
            <div className="flex h-screen justify-center bg-cyan-300 py-4 ">
                <div className="flex flex-col w-2/3 ">

                    <ForgotPasswordForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}

                    />

                    <div className="flex justify-center">
                        <Link href="/login">
                            <p>Already have account?<a className="text-blue-800">Login</a> </p>
                        </Link>

                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center ">
                <Modal
                    title="Congratulations!"
                    visible={ok}
                    onCancel={() => setOk(false)}
                    footer={null}
                >
                    <h3>Successfully Password has been changed!</h3>
                    <Link href='/login'>
                        <a className="px-2 py-1 text-white bg-black">login</a>
                    </Link>
                </Modal>
            </div>
        </>
    )
}
export default ForgotPassword;