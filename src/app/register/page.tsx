'use client'

import React, { useState } from 'react'

interface RegisterFormProps {
  onSuccess: () => void
}

export default function Register({onSuccess}: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
    <form onSubmit={handleSubmit} className='space-y-4'>
      <h2 className='text-xl font-bold mb-4'>Create an Account</h2>
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <div>
        
      </div>
    </form>
  )
}
