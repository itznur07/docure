"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Form: React.FC<{ type: string }> = ({ type }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandling = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formHandling)}>
      <div className='mt-5 flex flex-col gap-4 '>
        {/* Input Group-1 */}
        <div className={`${type === "signup" ? "" : "hidden"}`}>
          <div>
            <Label htmlFor='name' className='text-md'>
              Name
            </Label>
            <Input
              type='text'
              placeholder='Enter your name'
              className='mt-1 bg-white'
              {...(type === "signup"
                ? { ...register("name", { required: true }) }
                : "")}
            />
            {errors.name && (
              <span className='text-sm text-red-500'>
                This field is required
              </span>
            )}
          </div>
        </div>
        {/* Input Group-2 */}
        <div
          className={`${
            type === "signup"
              ? "flex items-center gap-5"
              : "flex flex-col gap-5"
          }`}
        >
          <div>
            <Label htmlFor='email' className='text-md'>
              Email
            </Label>
            <Input
              type='email'
              placeholder='Enter email address'
              className='mt-1 bg-white'
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className='text-sm text-red-500'>
                This field is required
              </span>
            )}
          </div>
          <div>
            <Label htmlFor='password' className='text-md'>
              Password
            </Label>
            <Input
              type='password'
              placeholder='Enter your password'
              className='mt-1 bg-white'
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className='text-sm text-red-500'>
                This field is required
              </span>
            )}
          </div>
        </div>
        {/* Input Group-3 */}
        <div
          className={`${
            type === "signup" ? "flex items-center gap-5" : "hidden"
          }`}
        >
          <div>
            <Label htmlFor='phone' className='text-md'>
              Phone
            </Label>
            <Input
              type='text'
              placeholder='Enter a phone number'
              className='mt-1 bg-white'
              {...(type === "signup"
                ? { ...register("phone", { required: true }) }
                : "")}
            />
            {errors.phone && (
              <span className='text-sm text-red-500'>
                This field is required
              </span>
            )}
          </div>
          <div>
            <Label htmlFor='address' className='text-md'>
              Address
            </Label>
            <Input
              type='text'
              placeholder='Enter address'
              className='mt-1 bg-white'
              {...(type === "signup"
                ? { ...register("password", { required: true }) }
                : "")}
            />
            {errors.password && (
              <span className='text-sm text-red-500'>
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className='mt-2'>
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
