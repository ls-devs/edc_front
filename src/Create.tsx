import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, PostUser } from "../types/types";
import { useEffect, useRef, useState } from "react";
export const Create = () => {
  const [lastLog, setLastLog] = useState<number>(0);
  const loginRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Omit<Inputs, "user_login">> = (data) => {
    postUser(data);
  };

  const lastLogin = async () => {
    const req = await fetch("http://localhost:3000/users/lastlogin");
    const res: number = await req.json();
    setLastLog(res + 1);
    console.log(res);
  };

  const postUser = async (data: Omit<Inputs, "user_login">) => {
    const req = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_login: loginRef.current?.value,
        ...data,
      }),
    });

    const res: PostUser = await req.json();
    if (!res.Message) {
      lastLogin();
      reset({
        user_activation_key: "",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        user_login: loginRef.current.value,
        user_email: "",
        user_nicename: "",
        user_pass: "",
        user_registered: new Date(),
        user_status: 0,
        user_url: "",
      });
    } else {
      console.log(res);
    }
  };

  useEffect(() => {
    lastLogin();
  }, []);

  return (
    <div className="flex w-auto flex-col items-center justify-center py-28">
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="LOGIN" className="w-[155px] text-lg font-semibold">
          LOGIN*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          ref={loginRef}
          value={lastLog}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="PASSWORD" className="w-[155px] text-lg font-semibold">
          PASS*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_pass")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="NOM" className="w-[155px] text-lg font-semibold">
          NOM*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_nicename")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="EMAIL" className="w-[155px] text-lg font-semibold">
          EMAIL*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_email")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="URL" className="w-[155px] text-lg font-semibold">
          URL*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_url")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="KEY" className="w-[155px] text-lg font-semibold">
          KEY*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_activation_key")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="STATUS" className="w-[155px] text-lg font-semibold">
          STATUS*
        </label>
        <input
          type="number"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("user_activation_key")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label
          htmlFor="DISPLAY NAME"
          className="w-[155px] text-lg font-semibold"
        >
          DISPLAY NAME*
        </label>
        <input
          type="text"
          className="ml-2 w-full border-2 border-gray-200"
          {...register("display_name")}
        />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="PRO" className="w-[155px] text-lg font-semibold">
          PRO*
        </label>
        <input type="checkbox" className="ml-2 w-full" {...register("pro")} />
      </div>
      <div className="relative mb-4 flex w-1/2">
        <label htmlFor="PARTENAIRE" className="w-[155px] text-lg font-semibold">
          PARTENAIRE*
        </label>
        <input
          type="checkbox"
          className="ml-2 block w-full border-2 border-gray-200"
          {...register("partenaire")}
        />
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className="mt-8 bg-red-edc px-8 py-2 text-white"
      >
        Créer l'adhérent
      </button>
    </div>
  );
};
