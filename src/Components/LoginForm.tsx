import React from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type formData = {
  names: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = () => {
  const schema: ZodType<formData> = z
    .object({
      names: z.string().min(3).max(50),
      email: z.string().email(),
      password: z.string().min(4).max(50),
      confirmPassword: z.string().min(4).max(50),
    })
    .refine((data) => data.password !== data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: formData) => {
    console.log("it worked", data);
  };

  return (
    <div>
      <form className="flex flex-col " onSubmit={handleSubmit(submitData)}>
        <label htmlFor="names">Names *</label>
        <input type="text" id="names" {...register("names")} />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password *</label>
        <input type="password" id="password" {...register("password")} />

        <label htmlFor="confirmPassword">Confirm Password *</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword")} />

        <input type="submit" value={"Sign up"} />
      </form>
    </div>
  );
};

export default LoginForm;
