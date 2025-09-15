import { Cpu, Database } from "lucide-react"
import { SiGithub , SiLinkedin } from "react-icons/si";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";

export function AppSidebar() {

  return (
    <Sidebar className="border-none">
      <SidebarContent className="bg-gray-900 text-gray-100">
        <div className="flex flex-col h-screen justify-between">
          <SidebarGroup/>
            <div>
              <SidebarMenu className="p-4 hover:bg-gray-800 hover:cursor-pointer">
                  <Link href="/" className="flex gap-4">
                    <Cpu/>
                    <p> 
                      Dashboard
                    </p>
                  </Link>
              </SidebarMenu>
              <SidebarMenu className="p-4 hover:bg-gray-800 hover:cursor-pointer">
                  <Link href="/all" className="flex gap-4">
                    <Database/>
                    <p> 
                      Todos processos
                    </p>
                  </Link>
              </SidebarMenu>
            </div>
          <SidebarGroup />

          <SidebarGroup/>
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/60665976?v=4" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-medium">Helena Kurz</h3>
              </div>
              <div className="flex gap-8">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="scale-160"/>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="scale-160"/>
                </a>
              </div>
            </div>
          <SidebarGroup />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}