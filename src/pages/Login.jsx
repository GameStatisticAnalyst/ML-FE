// pages/register.js
import FormCard from "../components/FormCard";

import DefaultTemplate from "@/layout/defaultLayout";

export default function RegisterPage() {
  return (
    <DefaultTemplate>
    <div className="relative h-full flex items-center justify-center">
      {/* Background SVG */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            className="absolute opacity-70"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
        ))}
      </div>

      {/* Form */}
      <FormCard
        title="Create an Account"
        description="Please register to get started with your account."
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Register
          </a>
        </p>
      </FormCard>
    </div>
    </DefaultTemplate>
  );
}
