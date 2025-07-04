import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import Loader from "./Loader";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFocus = (e) => {
    const input = e.target;
    input.classList.add("ring-2", "ring-blue-300");
    setCurrentAnimation("walk");
  };

  const handleBlur = (e) => {
    const input = e.target;
    input.classList.remove("ring-2", "ring-blue-300");
    setCurrentAnimation("Idle");
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentAnimation("hit");
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Replace with your EmailJS credentials
      // Service ID, Template ID, and Public Key from EmailJS dashboard
      await emailjs.send(
        "YOUR_SERVICE_ID", // e.g., service_xxxxxx
        "YOUR_TEMPLATE_ID", // e.g., template_xxxxxx
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // e.g., xxxxxxxxxxxxxxxx
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setCurrentAnimation("idle");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex lg:flex-row flex-col min-h-screen py-16 px-6 bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#60a5fa"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Form Section */}
      <div className="flex-1 min-w-[50%] flex flex-col items-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
          Get in Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
            {formErrors.name && (
              <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Your message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none"
            />
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {/* 3D Canvas Section */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] z-10">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            className="w-full h-full"
            style={{ background: "transparent" }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
