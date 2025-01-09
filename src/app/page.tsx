"use client"
import { Container } from "../components";
import { useRouter } from "next/navigation";


export default function Home() {
   const router = useRouter()

   return (
      <Container>
         <div>
            <button onClick={() => router.push("../pages/Login")}>
               To Login
            </button>
            <button onClick={() => router.push("../pages/List")}>
               To List
            </button>
         </div>
      </Container>
   );
}
