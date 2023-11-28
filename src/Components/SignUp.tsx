import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import backgroundImage from "../Images/background.png";
import welcomeLogo from "../Images/logo_welcome.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
type formData = {
  names: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type GoogleLoginResponseWithData = {
  profileObj: {
    email: string;
    name: string;
  };
};

type GoogleLoginResponseOfflineWithData = {
  error: string;
};

const SignUp = () => {
  const navigate = useNavigate()
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
    <div className="flex flex-row ">
      <div className=" w-[50%] pt-[3%] h-full pl-[5%]">
        <img
          src={welcomeLogo}
          className="mb-[2em]  h-[80px] "
          alt="project logo"
        />
        <h1 className="font-lexend font-bold text-[20px] text-black">
          Create An Account
        </h1>
        <p className="mt-[1em] text-[17px]">
          Fill the fields below to get started{" "}
        </p>
        <div className="pt-[2em] pb-[1em]">
        <Button />
        </div>

        <div className="flex flex-row">
          <hr className="w-[20%] self-center"/>
          <p >or</p>
          <hr className="w-[20%] self-center" />
        </div>
        <form className="flex flex-col " onSubmit={handleSubmit(submitData)}>
          <label htmlFor="names">Names *</label>
          <input
            className="border-gray-400 border-[1px]  mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="text"
            id="names"
            {...register("names")}
          />
          <label htmlFor="email">Email *</label>
          <input
            className="border-gray-400 border-[1px]  mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="email"
            id="email"
            {...register("email")}
          />

          <label htmlFor="password">Password *</label>
          <input
            className="border-gray-400 border-[1px] mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="password"
            id="password"
            {...register("password")}
          />

          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            className="border-gray-400 border-[1px] mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />

          <input
            type="submit"
            className="text-white h-[50px] cursor-pointer font-lexend mt-[1em] w-[60%] border-none rounded-lg bg-[#1F6115]"
            value={"Sign up"}
          />
        </form>

        <div className="pt-[1em]">
          <p className="text-gray-300 font-lexend">
            Already have an account ?{" "}
            <span  onClick={()=>{
              navigate("/signIn")
            }} className="text-[#1F6115] font-lexend   cursor-pointer">
              Sign in{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      <div
        className="w-[50%] bg-cover bg-no-repeat  overflow-y-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="mt-[21%] mb-[40%]  pt-[5%] opacity-70 w-[50%] mx-auto  flex flex-col items-center bg-white">
          <div className="pb-[20%]">
            <h1 className=" text-[#1F6115] text-[40px] h-[50px] mb-[2em] font-lexend-600 font-bold ">
              Start your <br></br> journey with us
            </h1>

            <p className="h-[40px] text-black-400">
              Reviving agriculture with Innovation
            </p>
            <p className="h-[40px] text-black-400">
              Monitoring Farm Activities Simplified{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
