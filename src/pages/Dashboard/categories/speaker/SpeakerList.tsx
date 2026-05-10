import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nama: z.string().min(1, "Nama speaker harus diisi"),

  role: z.string().min(1, "Role harus diisi"),

  foto: z.string().min(1, "Foto harus dipilih"),
});

export default function SpeakerList() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-[#852e4e] mb-6">
        Create New Speaker
      </h1>

      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >

        
        <FormInput
          text="Nama Speaker"
          type="text"
          name="Nama"
          register={register}
          error={errors.nama?.message}
        />

        
        <FormInput
          text="Role"
          type="text"
          name="Role"
          register={register}
          error={errors.role?.message}
        />

        
        <div className="flex flex-col gap-2">

          <label className="font-medium">
            Foto
          </label>

          <input
            type="file"
            {...register("foto")}
            className={`border p-2 rounded-md outline-none transition-all
            ${
              errors.foto
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-white"
            }
            focus:border-[#852e4e]`}
          />

          {errors.foto && (
            <p className="text-red-500 text-sm">
              {errors.foto.message}
            </p>
          )}

        </div>

        
        <Button
          label="Simpan"
          variant="primary"
          className="w-full"
          type="submit"
        />

      </form>
    </div>
  );
}