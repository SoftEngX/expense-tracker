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
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-orange-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
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
            <p className="text-white/90 text-base leading-relaxed drop-shadow-md">
              Take control of your finances with our powerful expense tracking tool. 
              Manage your budget, track spending, and save money effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-8 lg:px-12 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
            <SignUp 
              routing="path"
              path="/sign-up"
              afterSignUpUrl="/"
              afterSignInUrl="/"
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
