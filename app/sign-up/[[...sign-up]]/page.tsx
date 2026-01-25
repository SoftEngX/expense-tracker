import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Background with Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bg-img.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="50vw"
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-orange-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white h-full">
          {/* Top Section - Branding */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold drop-shadow-lg">Welcome to Expense Tracker</h2>
            </div>
            <p className="text-white/90 text-base leading-relaxed drop-shadow-md mb-8">
              Take control of your finances with our powerful expense tracking tool. 
              Manage your budget, track spending, and save money effortlessly.
            </p>
          </div>

          {/* Bottom Section - Reviews */}
          <div className="max-w-md space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                "This app has completely transformed how I manage my finances. Simple, intuitive, and incredibly effective!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">SM</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sarah Martinez</p>
                  <p className="text-white/70 text-xs">Financial Advisor</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                "Best expense tracker I've used! The interface is clean and the insights help me save hundreds each month."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">JD</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">John Davis</p>
                  <p className="text-white/70 text-xs">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-8 lg:px-12 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
            <SignUp 
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 p-0",
                  headerTitle: "text-2xl font-bold text-gray-900 mb-2",
                  headerSubtitle: "text-gray-600 mb-6",
                  socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50 transition-colors rounded-lg",
                  formButtonPrimary: "bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md",
                  formFieldInput: "border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20",
                  footer: "mt-6",
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
