import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search,
    Home,
    Briefcase,
    Building2,
    GraduationCap,
    ImageIcon,
    Link,
    Phone
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

interface CommandMenuProps {
    onSectionChange: (section: string) => void;
}

export function CommandMenu({ onSectionChange }: CommandMenuProps) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 text-muted-foreground"
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('home'))}>
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('events'))}>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Events</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('faculty'))}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>Faculty</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Departments">
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('department'))}>
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Departments</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('academic'))}>
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Academic</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="More">
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('gallery'))}>
                            <ImageIcon className="mr-2 h-4 w-4" />
                            <span>Gallery</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => onSectionChange('contact-us'))}>
                            <Phone className="mr-2 h-4 w-4" />
                            <span>Contact Us</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
