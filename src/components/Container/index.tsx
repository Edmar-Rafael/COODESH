import { ReactNode } from "react";

interface ContainerProps {
   children?: ReactNode;
}

function Container(props: ContainerProps) {

   return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
         {props.children}
      </div>
   )
}

export default Container;