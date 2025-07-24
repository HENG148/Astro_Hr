'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import image from '../../../public/find_job_primary.1e1bc76.png'
import CompanyLogo from '../../../public/8.png'
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface RegisterFormProps {
  onSuccess: () => void
}

export default function Register({onSuccess}: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen pt-14 bg-gray-50'>
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-[10rem] max-w-7xl'>
        <div className='flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden'>
          {/* Left Side - Welcome Section */}
          <div className='lg:w-1/2 bg-[#F0F6FF] p-8 sm:p-12 flex flex-col'>
            <div>
              <Image src={CompanyLogo} alt='Logo' width={64} height={64} />
              <h1 className='text-2xl sm:text-3xl font-bold mt-6'>Welcome to</h1>
              <h2 className='text-xl sm:text-2xl font-bold mt-2'>Jobify <span className='text-primary'>Job Seeker</span></h2>
              <p className='text-gray-600 mt-4'>Find your dream job now.</p>
            </div>
            <div className='mt-8 flex-1 flex items-center justify-center '>
              <Image 
                src={image} 
                alt='Job search illustration' 
                className='w-full max-w-xs sm:max-w-md mx-auto'
                priority
              />
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className='lg:w-1/2 p-6 sm:p-8 md:p-12'>
            <div className='max-w-md mx-auto'>
              {/* Login prompt */}
              <div className='text-right text-sm mb-6'>
                <span className='text-gray-600'>Are you a member? </span>
                <Link href="/login" className='text-primary font-medium hover:underline'>
                  Login
                </Link>
              </div>

              {/* Registration Form */}
              <div className='mb-8'>
                <h3 className='grid justify-items-center text-xl text-primary font-semibold mb-6'>Register</h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
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

                  <div>
                    {/* <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label> */}
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                  </div>

                  <div>
                    {/* <label className='block text-sm font-medium text-gray-700 mb-1'>Confirm password</label> */}
                    <input
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                    {/* <p className='mt-1 text-sm text-red-600'>This field is required</p> */}
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-primary text-white py-2 px-4 rounded-3xl hover:bg-primary-dark cursor-pointer transition-colors'
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
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
                {/* <h3 className='text-xl font-semibold mb-4'>Register</h3> */}
                
                <button
                  type='button'
                  className='w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-3xl bg-log cursor-pointer'
                >
                  <FaGoogle className='text-white' />
                  <span className='text-white'>Sign up with Google</span>
                </button>

                <button
                  type='button'
                  className='w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-3xl bg-primary cursor-pointer'
                >
                  <FaLinkedin className='text-white' />
                  <span className='text-white'>Sign up with LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}