
import { LoginProps } from '@/types';
import Link from "next/link";
import Image from 'next/image'

export default function LoginForm(data:LoginProps) {

    return (
      <div className=" w-screen h-screen grid grid-rows-2 text-white md:grid-cols-2">
        
        {/* Left Side */}
        <div className=' relative flex flex-col items-center justify-center min-h-screen overflow-hidden md:h-screen'>
        <div className="w-1/2 p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link
              href="/forget"
              className="text-xs text-blue-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>
  
          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        </div>
        {/* Right Side */}
        
        <div className='w-full h-full text-black centered md:h-screen'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold'>Expense Tracker</h1>
            <p>"Be in Control"</p>

            <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain"/>
            </div>
            <div className="hero__image-overlay"></div>
            
            </div>
          </div>
          
        </div>
        

       
        
      </div>
    );
  }
  