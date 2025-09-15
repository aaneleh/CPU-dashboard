import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Button>
        <Moon />
        Click me</Button>    
    </div>
  );
}