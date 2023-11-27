import { useForm } from "react-hook-form";
import { Button } from "../Button";
import "@/app/styles/form.css";
export function ConnectModal({ visibility, setHidden }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logOrSingForm =() => {
    return (
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-25 ${
          visibility ? "" : "hidden"
        } flex justify-center items-center minWidth`}
      >
        <div className="bg-white border-4 border-red-900 rounded-xl relative w-5/6 sm:w-1/2 connectForm">
          <h2 className="text-center">Login</h2>
          <form action="" className="flex flex-col justify-center items-center">
            <div className="label-input">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                data-test-id="Email"
                type="email"
                placeholder="Email"
                {...register("Email")}
              />
            </div>
            <div className="label-input">
              <label htmlFor="Password">Password</label>
              <input
                id="Password"
                data-test-id="Password"
                type="password"
                placeholder="Password"
                {...register("Password")}
              />
            </div>
            <div className="flex flex-row justify-around w-5/6 md:w-1/2">
            <Button onClick={setHidden} text={"Cancel"} className={"btnCancel"}/>
            <Button onClick={setHidden} text={"Submit"} className={"btnValidation"}/>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return logOrSingForm()
}
