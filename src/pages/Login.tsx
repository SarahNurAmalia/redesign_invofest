import FormInput from "../components/FormInput";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 angka"),
});

export default function Login(){

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    text="Email"
                    type="text"
                    name="Email"
                    register={register}
                    error={errors.email?.message}
                />

                <FormInput
                    text="Password"
                    type="password"
                    name="Password"
                    register={register}
                    error={errors.password?.message}
                />

                <div>
                    <Button
                        label="Login"
                        variant="primary"
                        className="w-full mt-2"
                        type="submit"
                    />
                </div>
            </form>

            <p className="mt-4">
                Belum punya akun?

                <Link
                    to="/register"
                    className="text-[#852e4e] hover:underline ml-1"
                >
                    Daftar sekarang
                </Link>
            </p>
        </div>
    );
}