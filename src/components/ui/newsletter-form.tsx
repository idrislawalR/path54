"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export function NewsletterForm() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!message) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setMessage("");
    }, 3500);

    return () => window.clearTimeout(timeoutId);
  }, [message]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setMessage("");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: new FormData(form),
    });

    setIsSubmitting(false);

    if (response.ok) {
      form.reset();
      setMessage("Successful");
      return;
    }

    setMessage("Please try again");
  }

  return (
    <div className="mt-7 w-full max-w-[286px]">
      <form
        className="flex w-full border border-[#2A2A2A] transition-colors duration-300 focus-within:border-[#AA8147]/80"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="footer-email" className="sr-only">
          Your email
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="min-h-[46px] min-w-0 flex-1 bg-transparent px-5 text-[12px] font-normal leading-none text-[#F3F0EB] outline-none transition-colors duration-300 placeholder:text-[#8E939C] focus:placeholder:text-[#F3F0EB]/45"
        />
        <button
          className="min-h-[46px] w-[46px] bg-[#AA8147] text-[18px] text-[#0F0F0F] transition-[background-color,transform] duration-300 hover:bg-[#C49A58] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F0EB] active:translate-x-0.5 disabled:cursor-wait disabled:opacity-70"
          type="submit"
          aria-label="Subscribe"
          disabled={isSubmitting}
        >
          <ArrowIcon className="mx-auto" />
        </button>
      </form>
      {message ? (
        <p className="mt-3 text-[12px] font-medium leading-[18px] text-[#AA8147]">
          {message}
        </p>
      ) : null}
    </div>
  );
}
