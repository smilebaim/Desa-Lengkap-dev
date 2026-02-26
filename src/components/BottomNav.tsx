
"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as Icons from "lucide-react";
import Link from 'next/link';
import type { Menu, MenuItem } from "@/lib/menu-data";

interface BottomNavProps {
  className?: string;
  menu?: Menu;
  loading: boolean;
}

const getIcon = (name?: string): React.FC<any> => {
    if (!name) return () => null;
    const IconComponent = (Icons as any)[name];
    return IconComponent || (() => null);
};

const BottomNav: React.FC<BottomNavProps> = ({ className, menu, loading }) => {
  const [openSheet, setOpenSheet] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const getSubItems = (parentId: string) => {
    return menu?.items?.filter(item => item.parentId === parentId).sort((a, b) => a.order - b.order) || [];
  }

  const parentItems = menu?.items?.filter(item => !item.parentId).sort((a, b) => a.order - b.order) || [];

  if (!isClient) return null;

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[600px] max-w-full rounded-full bg-white/40 border-t border-black/10 backdrop-blur-md backdrop-saturate-200 backdrop-brightness-125 transition-all">
        <div className="flex justify-center items-center h-14 sm:h-16 rounded-full overflow-hidden">
          {loading ? (
             <div className="flex items-center justify-center w-full h-full">
                <Icons.Loader className="animate-spin" />
             </div>
          ) : parentItems.map((item) => {
            const Icon = getIcon(item.icon);
            const subItems = getSubItems(item.id);

            if (subItems.length > 0) {
              return (
                <Sheet key={item.id} open={openSheet === item.id} onOpenChange={(isOpen) => setOpenSheet(isOpen ? item.id : null)}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex flex-col items-center text-black hover:text-black hover:bg-black/10 hover:backdrop-blur-sm hover:backdrop-saturate-150 transition-all w-full py-1.5 sm:py-2 px-2 sm:px-3 h-full rounded-none"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 mb-0.5 text-black" />
                      <span className="text-[10px] sm:text-xs">{item.title}</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[70vw] sm:w-[336px] bg-white/40 backdrop-blur-md backdrop-saturate-200 backdrop-brightness-125 border-r border-black/10 rounded-r-[2rem] top-14 sm:top-20 h-[calc(100vh-7rem)] sm:h-[calc(100vh-10rem)] transition-all duration-300">
                    <SheetHeader>
                        <SheetTitle className="sr-only">{item.title}</SheetTitle>
                        <SheetDescription className="sr-only">Sub-menu for {item.title}</SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="h-full">
                      <div className="space-y-3 sm:space-y-4 py-6 sm:py-8">
                        <h3 className="font-semibold text-base sm:text-lg mb-2 text-black px-2 sm:px-3 border-b border-black/10 pb-2 transition-all hover:bg-black/10 flex items-center gap-2">
                           <Icon className="h-5 w-5" />
                           {item.title}
                        </h3>
                        {subItems.map((subItem) => {
                          const SubItemIcon = getIcon(subItem.icon);
                          return (
                            <Button
                              key={subItem.id}
                              variant="ghost"
                              className="w-full justify-start text-black hover:text-black hover:bg-black/10 transition-all py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm"
                              onClick={() => setOpenSheet(null)}
                              asChild
                            >
                              <Link href={subItem.path}>
                                <SubItemIcon className="h-4 w-4 mr-2 text-black" />
                                {subItem.title}
                              </Link>
                            </Button>
                          );
                        })}
                      </div>
                       <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-black/10">
                          <p className="text-[10px] sm:text-xs text-black/40 italic font-bold">
                            Penafian : Data dan informasi yang di sajikan dalam Laman ini bersifat indikatif dan tidak di maksudkan untuk penyebarluasan informasi. Lebih lanjut hubungi pemerintah desa dan walidata terkait untuk validasi
                          </p>
                        </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              );
            }
            
            // Otherwise, it's a direct link
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="flex flex-col items-center text-black hover:text-black hover:bg-black/10 hover:backdrop-blur-sm hover:backdrop-saturate-150 transition-all w-full py-1.5 sm:py-2 px-2 sm:px-3 h-full rounded-none"
                asChild
              >
                <Link href={item.path}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 mb-0.5 text-black" />
                  <span className="text-[10px] sm:text-xs">{item.title}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
    