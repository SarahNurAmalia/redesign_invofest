import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nama: z.string().min(1, "Nama event harus diisi"),

  category: z.string().min(1, "Category harus dipilih"),

  lokasi: z.string().min(1, "Lokasi harus diisi"),

  tanggal: z.string().min(1, "Tanggal harus diisi"),

  deskripsi: z.string().min(1, "Deskripsi harus diisi"),
});

export default function EventList() {

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
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-[#852e4e] mb-6">
        Create New Event
      </h1>

      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >

        <FormInput
          text="Nama Event"
          type="text"
          name="Nama"
          register={register}
          error={errors.nama?.message}
        />

        
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Category
          </label>

          <select
            {...register("category")}
            className={`border p-3 rounded-md outline-none transition-all
            ${
              errors.category
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-white"
            }
            focus:border-[#852e4e]`}
          >
            <option value="">Pilih Category</option>
            <option value="competition">Competition</option>
            <option value="seminar">Seminar</option>
            <option value="workshop">Workshop</option>
            <option value="talkshow">Talkshow</option>
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        
        <FormInput
          text="Lokasi"
          type="text"
          name="Lokasi"
          register={register}
          error={errors.lokasi?.message}
        />

        
        <FormInput
          text="Tanggal"
          type="date"
          name="Tanggal"
          register={register}
          error={errors.tanggal?.message}
        />

        
        <div className="flex flex-col gap-2">

          <label className="font-medium">
            Deskripsi
          </label>

          <textarea
            {...register("deskripsi")}
            rows={5}
            className={`border p-3 rounded-md outline-none transition-all
            ${
              errors.deskripsi
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-white"
            }
            focus:border-[#852e4e]`}
          />

          {errors.deskripsi && (
            <p className="text-red-500 text-sm">
              {errors.deskripsi.message}
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