"use client";
import { Container } from "@/components";
import { useRouter } from "next/navigation";

function List() {
   const router = useRouter()

   return (
      <Container>
         <div >List</div>
         <button onClick={() => router.push("/")}>Back to Home</button>
      </Container>
   )
}

export default List;