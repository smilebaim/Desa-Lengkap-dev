'use client';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { useEffect, useState } from 'react';
import type { Menu } from '@/lib/menu-data';
import { getMenusWithItems } from '@/lib/menu-actions';
import { getSiteSettings } from '@/lib/site-settings-actions';
import type { SiteSettings } from '@/lib/site-settings-actions';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as Icons from 'lucide-react';


const Sidebar = ({ menu }: { menu: Menu }) => {
    const pathname = usePathname();
    const getIcon = (name?: string): React.FC<any> => {
        if (!name) return () => null;
        const IconComponent = (Icons as any)[name];
        return IconComponent || (() => null);
    };
    const MenuIcon = getIcon(menu.icon);

    return (
      <div className="fixed left-0 md:top-16 top-1/2 -translate-y-1/2 md:translate-y-0 h-auto md:h-[calc(100vh-9rem)] md:w-72 w-12 bg-emerald-800/90 backdrop-blur-md backdrop-saturate-200 backdrop-brightness-125 border-r border-emerald-900 z-40 transition-all duration-300 rounded-r-[2rem] md:rounded-none md:rounded-br-[4rem]">
        <ScrollArea className="h-full max-h-[70vh] md:max-h-none md:px-4 px-1 py-8">
          <div className="space-y-2 md:pb-16">
            <h3 className="font-semibold text-lg mb-6 text-emerald-50 border-b border-emerald-100/20 pb-3 hidden md:block md:flex items-center gap-2">
                {MenuIcon && <MenuIcon className="h-5 w-5" />}
                {menu.name}
            </h3>
            <div className="space-y-4">
              <TooltipProvider delayDuration={100}>
                {menu.items?.map((item, index) => {
                   const ItemIcon = getIcon(item.icon);
                   return (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className={`w-full justify-center md:justify-start text-emerald-50 hover:text-emerald-50 hover:bg-emerald-700/50 transition-all py-3 md:py-2.5 px-1 md:px-3 text-sm ${
                              pathname === item.path ? 'bg-emerald-700/70' : ''
                            }`}
                            asChild
                          >
                            <Link href={item.path}>
                              {ItemIcon && <ItemIcon className="h-4 w-4 md:h-5 md:w-5 md:mr-3 text-white" />}
                              <span className="hidden md:inline">{item.title}</span>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={16} className="md:hidden bg-emerald-800/90 text-emerald-50 border-emerald-700">
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                   )
                })}
              </TooltipProvider>
            </div>
          </div>
        </ScrollArea>
      </div>
    );
};


const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    setIsClient(true);
    const fetchMenus = async () => {
      setLoading(true);
      const menusData = await getMenusWithItems();
      setMenus(menusData);
      setLoading(false);
    };
    const fetchSettings = async () => {
        const settingsData = await getSiteSettings();
        setSiteSettings(settingsData);
    };
    fetchMenus();
    fetchSettings();
  }, []);

  const topNavMenu = menus.find(m => m.location === 'topnav');
  const bottomNavMenu = menus.find(m => m.location === 'bottomnav');
  
  const activeSidebarMenu = menus.find(m => {
    if (m.location !== 'sidebar' || !m.items || m.items.length === 0) {
      return false;
    }
    const pathnameRoot = pathname.split('/')[1];
    if (!pathnameRoot) return false;
    
    // The sidebar is active if the root of the current path
    // matches the root of any of the sidebar's menu item paths.
    return m.items.some(item => {
        const itemRoot = item.path.split('/')[1];
        return itemRoot && itemRoot === pathnameRoot;
    });
  });

  const needsSidebar = !!activeSidebarMenu;

  if (!isClient) {
    return (
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav menu={topNavMenu} loading={loading} logoUrl={siteSettings?.logoUrl} />
      {needsSidebar && activeSidebarMenu && <Sidebar menu={activeSidebarMenu} />}
      <main className={`flex-grow transition-all duration-300 ${needsSidebar ? 'md:pl-72 pl-16' : ''}`}>
        {children}
      </main>
      <BottomNav menu={bottomNavMenu} loading={loading} />
    </div>
  );
};

export default PublicLayout;
