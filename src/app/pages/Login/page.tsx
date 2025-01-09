"use client";
import { Container } from "@/components";
import { useRouter } from "next/navigation";

function Login() {
   const router = useRouter()

   return (
      <Container >
         <div>Login</div>
         <hr />
         <button onClick={() => router.push("/")}>back home</button>
      </Container>
   )
}

export default Login;