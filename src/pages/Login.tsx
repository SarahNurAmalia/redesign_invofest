import FormInput from "../components/FormInput";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
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

    const navigate = useNavigate();
    const login  = useAuthStore((state) => state.login);
    
    const onSubmit = (data: FormData) => {
        if (data.email === "admin@gmail.com" && data.password === "admin123") {

    login(data.email);
    alert("Login berhasil!");
    navigate("/dashboard");

} else {

    alert("Login gagal! Email atau password salah.");

}
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    text="Email"
                    type="text"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                />

                <FormInput
                    text="Password"
                    type="password"
                    name="password"
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