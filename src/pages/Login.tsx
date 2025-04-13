import FirstLayout from '../components/FirstLayout'
import BrandLogo from '../components/BrandLogo'
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa'

const Login = () => {
  return (
    <FirstLayout>
      <div className='flex flex-col items-center min-h-screen px-4'>

        <div className="flex justify-center mb-8">
          <BrandLogo />
        </div>

        <div className='w-full max-w-[400px] bg-white p-4 text-center'>

          <p className='text-[20px] font-semibold mb-2'>Login</p>
          <p className='text-[14px] text-slate-500 mb-6'>Enter Mobile Number To Continue</p>

          <div className='bg-slate-300 rounded-lg px-6 py-2 mb-3 flex flex-col justify-start'>
            <label className='text-left text-slate-600'>Mobile no</label>
          <input
            type="text"
            placeholder="."
            className='w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-300'
            defaultValue="9000000"
          />
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition mb-4">
            OTP
          </button>

          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className='flex justify-center gap-4 mb-6'>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="text-[20px]" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaApple className="text-[20px]" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaFacebookF className="text-[20px] text-blue-600" />
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-12">
            Don't Have An Account?{' '}
            <a href="#" className="text-green-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </FirstLayout>
  )
}

export default Login
