import {zodResolver}  from "@hookform/resolvers/zod";  
import { useForm } from "react-hook-form";
import {z} from "zod"
import FormInput from "../components/FormInput";

const schema = z.object({
    nama:z.string().min(1, "Nama harus diisi"),
    email:z.string().min(8, "Email minimal 8 karakter"),
    password:z.string().min(8, "Password minimal 8 karakter"),
    password_confirm:z.string().min(8, "Password confirm harus diisi")
})

export default function Register(){
const {register,  handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    });

const onSubmit = (data: any) => {
  console.log(data);
  alert("Register berhasil!");
};
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput text="nama" type="text" name="nama" register={register} error={errors.nama?.message} />
                <FormInput text="email" type="text" name="email" register={register} error={errors.email?.message} />
                <FormInput text="password" type="text" name="password" register={register} error={errors.password?.message} />
                <FormInput text="password_confirm" type="text" name="password_confirm" register={register} error={errors.password_confirm                       ?.message} />

                <div>
                    <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-3 rounded-md mt-2 hover:bg-pink-700 transition"
            >Register
</button>
                </div>
            </form>
        </div>
    )
}