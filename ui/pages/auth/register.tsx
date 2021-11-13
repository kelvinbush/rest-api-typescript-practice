import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form>
        <div className={"form-element"}>
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type="email"
            placeholder={"jane.doe@example.com"}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
