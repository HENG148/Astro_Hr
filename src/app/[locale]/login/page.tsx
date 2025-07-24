'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import image from '../../../../public/find_job_primary.1e1bc76.png'
import MainLogo from '../../../../public/8.png'
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface RegisterFormProps {
  onSuccess: () => void
}

export default function LoginPage({onSuccess}: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogin(true);
    setError("");

    try {
      const response = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Registration Failed");
      }
      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLogin(false)
    }
  }

  return (
    <div className='min-h-screen pt-14 bg-gray-50'>
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-[10rem] max-w-7xl'>
        <div className='flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden'>
          {/* Left Side - Welcome Section */}
          <div className='lg:w-1/2 bg-[#F0F6FF] p-8 sm:p-12 flex flex-col'>
            <div>
              <Image src={MainLogo} alt='Logo' width={64} height={64} />
              <h1 className='text-2xl sm:text-3xl font-bold mt-6'>Welcome to</h1>
              <h2 className='text-xl sm:text-2xl font-bold mt-2'>Jobify <span className='text-primary'>Job Seeker</span></h2>
              <p className='text-gray-600 mt-4'>Find your dream job now.</p>
            </div>
            <div className='mt-8 flex-1 flex items-center justify-center'>
              <Image 
                src={image} 
                alt='Job search illustration' 
                className='w-full max-w-xs sm:max-w-md mx-auto sm:hidden md:hidden lg:block'
                priority
              />
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className='lg:w-1/2 p-6 sm:p-8 md:p-12'>
            <div className='max-w-md mx-auto'>
              {/* Login prompt */}
              <div className='text-right text-sm mb-14'>
                <span className='text-gray-600'>Not a members? </span>
                <Link href="/register" className='text-primary font-medium hover:underline'>
                  Register
                </Link>
              </div>

              {/* Registration Form */}
              <div className='mb-8'>
                <h3 className='grid justify-items-center text-xl text-primary font-semibold mb-12'>Log In</h3>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    {/* <label className='block text-sm font-medium text-gray-700 mb-1'>Full name</label> */}
                    <input
                      type='text'
                      name='name'
                      placeholder='Full name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                  </div>

                  <div>
                    {/* <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label> */}
                    <input
                      type='email'
                      name='email'
                      placeholder='Email address'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                  </div>

                  <div className='text-end text-primary font-normal underline underline-offset-1'>
                    <Link href='/login'>Forgot password?</Link>
                  </div>

                  <button
                    type='submit'
                    disabled={isLogin}
                    className='w-full bg-primary text-white font-medium py-2 px-4 rounded-3xl hover:bg-primary-dark cursor-pointer transition-colors'
                  >
                    {isLogin ? 'Login...' : 'Login'}
                  </button>
                </form>
              </div>

              {/* Divider */}
              <div className='relative mb-8'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>OR</span>
                </div>
              </div>

              {/* Social Login */}
              <div className='space-y-3'>                
                <button
                  type='button'
                  className='w-full flex items-center justify-center gap-2 py-2 px-4 border bg-log border-gray-300 rounded-3xl cursor-pointer'
                >
                  <FaGoogle className='text-white' />
                  <span className='text-white'>Sign in with Google</span>
                </button>

                <button
                  type='button'
                  className='w-full flex items-center justify-center gap-2 py-2 px-4 border bg-primary border-gray-300 rounded-3xl cursor-pointer'
                >
                  <FaLinkedin className='text-white' />
                  <span className='text-white'>Sign in with LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// 'use client'

// import { login } from "@/lib/api/auth";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   // const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null)
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null)
//     setIsLoading(true);

//     try {
//       if (!formData.email || !formData.password) {
//         throw new Error("Please fill in all fields");
//       }
//       const { token } = await login(formData)
//       localStorage.setItem("token", token);

//       router.push('/dashboard');
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Login failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full p-8 space-y-8 bg-white rounded-lg shadow">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
//           <p className="mt-2 text-gray-600">
//             Enter your credentials to access your account
//           </p>
//         </div>

//         {error && (
//           <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
//                 Forgot password?
//               </Link>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//               isLoading ? 'opacity-75 cursor-not-allowed' : ''
//             }`}
//           >
//             {isLoading ? 'Signing in...' : 'Sign in'}
//           </button>
//         </form>

//         <div className="text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }