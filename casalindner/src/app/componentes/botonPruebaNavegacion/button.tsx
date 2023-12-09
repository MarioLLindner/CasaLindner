"use client";
import { useRouter, usePathname } from "next/navigation";


export const Btn = (props:any) => {
    const { url,nextPage } = props;
    const ruta = url;
    const router = useRouter();
    const pathname = usePathname();

    const navegar = () => {
        if (pathname !== ruta) {
          router.push(ruta);
        }
      };
  
  return (
    <>
        <button className="btn" onClick={() => navegar()}>
          {nextPage}
        </button>
    </>
  );
};