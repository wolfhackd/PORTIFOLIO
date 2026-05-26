import {
  AppWindow,
  BookText,
  Calendar,
  Folder,
  Home,
  Info,
  Link as LinkIcon,
  List,
  Mail,
} from 'lucide-react';
import { useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import { Link } from 'react-router';

export const MenuModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <AppWindow className="text-[#EEF4ED] cursor-pointer m-1 p-1 rounded-md size-8" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <div>
                  <p className="font-medium">Home</p>
                  <p className="text-xs text-muted-foreground">
                    Bem-vindo ao meu trabalho em andamento!
                  </p>
                </div>
              </CommandItem>

              <Link to={'/projetos'}>
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <div>
                    <p className="font-medium">Projetos</p>
                    <p className="text-xs text-muted-foreground">Todos meus projetos</p>
                  </div>
                </CommandItem>
              </Link>

              <CommandItem>
                <BookText className="mr-2 h-4 w-4" />
                <div>
                  <p className="font-medium">Blog</p>
                  <p className="text-xs text-muted-foreground">
                    Pensamentos, tutoriais e insights.
                  </p>
                </div>
              </CommandItem>

              <Link to={'/sobre'}>
                <CommandItem>
                  <Info className="mr-2 h-4 w-4" />
                  <div>
                    <p className="font-medium">Sobre</p>
                    <p className="text-xs text-muted-foreground">Um pouco sobre mim</p>
                  </div>
                </CommandItem>
              </Link>

              <CommandItem>
                <List className="mr-2 h-4 w-4" />
                <div>
                  <p className="font-medium">Lista de desejos</p>
                  <p className="text-xs text-muted-foreground">
                    Coisas que quero fazer pelo menos uma vez na minha vida
                  </p>
                </div>
              </CommandItem>

              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <div>
                  <p className="font-medium">Agenda</p>
                  <p className="text-xs text-muted-foreground">Agende um tempo comigo</p>
                </div>
              </CommandItem>

            </CommandGroup>

            <CommandSeparator />

            <div className="px-4 py-3 border-t">
              <div className="flex items-center justify-end gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded-md">↑</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded-md">↓</kbd>
                  <span>navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded-md">↩</kbd>
                  <span>select</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-muted rounded-md">esc</kbd>
                  <span>close</span>
                </div>
              </div>
            </div>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};