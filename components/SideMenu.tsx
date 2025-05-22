
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/hooks';


interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu:React.FC<SideBarProps> = ({isOpen, onClose}) => {
    const pathname = usePathname();
    const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
        <div ref={sideBarRef} className='min-w-72 max-w-96 bg-black text-white/80 h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6'>
            <div className='flex items-center justify-between gap-5'>
                <Logo className='text-white' spanDesign="group-hover:text-white" />
                <button onClick={onClose} className='hover:text-shop_light_green hoverEffect'><X /></button>
            </div>    
            <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
                {headerData?.map((item) => (
                    <Link 
                        href={item?.href} 
                        key={item?.title} 
                        className={`hover:text-shop_light_green hoverEffect ${pathname === item?.href && "text-shop_light_green"}`}>
                        {item?.title}
                    </Link>
                
                ))}
            </div>
        </div>
    </div>

  )
}

export default SideMenu
