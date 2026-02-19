import React from "react";
import { Eye, EyeOff, Loader2, Camera, AlertTriangle } from "lucide-react";

export const LoginForm = ({
  credentials,
  setCredentials,
  showPassword,
  setShowPassword,
  isLoggingIn,
  loginError,
  onLogin,
}) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-2xl mb-4">
            <Camera size={28} className="text-neutral-200" />
          </div>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Admin Login</h1>
          <p className="text-neutral-400 mt-2">Sign in to manage your content</p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
          <form onSubmit={onLogin} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-neutral-300 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                className="w-full bg-black border border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white rounded-md px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-neutral-300 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="w-full bg-black border border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white rounded-md px-3 py-2 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-start gap-2">
                <AlertTriangle size={16} className="mt-0.5" />
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-white hover:bg-neutral-200 text-black font-semibold h-11 rounded-md inline-flex items-center justify-center uppercase tracking-wider text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
            <p className="text-xs text-neutral-500">
              Use your admin credentials to access the dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
