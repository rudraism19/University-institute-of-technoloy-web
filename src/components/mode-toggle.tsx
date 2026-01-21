import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <div className="relative">
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                        <Sun className="h-[1.5rem] w-[1.5rem]" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                {/* Absolute positioning to overlap the sun icon for smooth transition if supported by CSS, or just render the moon separately if preferred. 
          The Shadcn default uses relative overlapped icons. Here we can simplify or use conditional rendering. 
          Let's use the standard shadcn approach with overlapped icons if possible, or just a simple dropdown. 
      */}
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="absolute top-0 left-0 h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                        <Moon className="h-[1.5rem] w-[1.5rem]" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
