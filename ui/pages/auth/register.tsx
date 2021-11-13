import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";

const createUserSchema = object({
  name: string({
    required_error: "Name is required",
  }),
  password: string({
    required_error: "Password is required",
  }).min(6, "Password too short - should be 6 chars minimum"),
  passwordConfirmation: string({
    required_error: "passwordConfirmation is required",
  }),
  email: string({
    required_error: "Email is required",
  }).email("Not a valid email"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  function onSubmit(values: any) {
    console.log({ values });
  }

  console.log({ errors });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type={"submit"}>Submit</button>
      </form>
    </>
  );
}

export default RegisterPage;
