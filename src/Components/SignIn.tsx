import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import signInBackgroundImage from "../Images/signinBackroundImage.png";
import welcomeLogo from "../Images/logo_welcome.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
type formData = {
  email: string;
  password: string;
  rememberMe:boolean;
};

const SignIn = () => {
  const navigate = useNavigate()
  const schema: ZodType<formData> = z
    .object({
      email: z.string().email(),
      password: z.string().min(4).max(50),
      rememberMe:z.boolean()
    })
   

  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: formData) => {
    console.log("it worked", data);
  };

  return (
    <div className="flex flex-row ">
      <div
        className="w-[50%] bg-cover bg-no-repeat  flex flex-col items-center overflow-y-hidden"
        style={{
          backgroundImage: `url(${signInBackgroundImage})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="mt-[14%] pt-[3%] mb-[38%]   opacity-70 w-[60%] h-fit ml-[2%]  flex flex-col  bg-white">
          <div className="pl-[10%] mb-[10%] ">
            <h1 className=" text-[#1F6115] text-[50px] h-[50px] mb-[2em] font-lexend-600 font-bold ">
              Want To <br></br> Monitor And <br /> Ensure Your <br /> Farm
              Security
            </h1>
            <div className="pt-[30%]">
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

      <div className=" w-[50%] pt-[3%] h-full pl-[10%]">
        <img
          src={welcomeLogo}
          className="mb-[2em]  h-[80px] "
          alt="project logo"
        />
        <h1 className="font-lexend font-bold text-[20px] text-black">
          Hey, hello
        </h1>
        <p className="mt-[1em] text-[17px]">
          Enter the information you entered while registering{" "}
        </p>
        <div className="pt-[2em] pb-[1em]">
        </div>
        <form className="flex flex-col " onSubmit={handleSubmit(submitData)}>
          <label htmlFor="email" className="mb-[1em]">Email *</label>
          <input
            className="border-gray-400 border-[1px]  mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="email"
            id="email"
            {...register("email")}
          />

          <label htmlFor="password"  className="mb-[1em]">Password *</label>
          <input
            className="border-gray-400 border-[1px] mb-[3%] w-[60%] rounded-md h-[35px] indent-3"
            type="password"
            id="password"
            {...register("password")}
          />

          <div className="flex flex-row "> 
            <div>
              <input type="checkbox" value="rememberMe" />
              <span className="pl-[0.75em]">Remember Me</span>
            </div>
            <div className="ml-[24%] cursor-pointer">
              <span className="text-[#1F6115]">Forgot password? </span>
            </div>
          </div>

          <input
            type="submit"
            className="text-white h-[50px] cursor-pointer font-lexend mt-[1em] w-[60%] border-none rounded-lg bg-[#1F6115]"
            value={"Login"}
          />
        </form>

        <div className="pt-[1em] mb-[2em]">
          <p className="text-gray-300 font-lexend">
            Don't have an account ?{" "}
            <span onClick={()=>{
                navigate("/")
            }} className="text-[#1F6115] font-lexend   cursor-pointer">
              Sign up{" "}
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-row mb-5">
          <hr className="w-[20%] self-center"/>
          <p >or</p>
          <hr className="w-[20%] self-center" />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default SignIn;
