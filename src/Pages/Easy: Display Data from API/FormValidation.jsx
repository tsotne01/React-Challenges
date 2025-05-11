import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from './Schema';
const FormValidation = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: "onTouched",
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = () => {
    setTimeout(() => {
      console.log("submited")
    }, 2000)
  }

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <form className='flex flex-col gap-2.5 max-w-2xs rounded-2xl border p-6' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input className='border p-2 rounded-2xl' {...register("email")} type="text" id='email' name='email' />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        <label htmlFor="password">Password:</label>
        <input className='border p-2 rounded-2xl' {...register("password")} type="password" id='password' name='password' />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

        <button disabled={isSubmitting} className={`${isSubmitting ? "bg-slate-400" : "bg-slate-100"} rounded-2xl p-3 cursor-pointer`} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default FormValidation