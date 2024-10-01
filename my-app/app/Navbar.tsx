import React from 'react'
import Link from 'next/link';
import { Kanban } from 'lucide-react';
import { Package2 } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { CalendarArrowUp } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { Settings } from 'lucide-react';

const Navbar = () => {
    const Buttons = {
        text: 'Overview',
        product: 'Products',
        users: 'Users',
        sales: 'Sales',
        orders: 'Orders',
        analytics: 'Analytics',
        setting: 'Settings'
    }

  return (
    <div>
        <nav className='bg-slate-950 border border-white h-full fixed'>
            <Link href={'/'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><Kanban/>{Buttons.text}</Link>
            <Link href={'/Products'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><Package2/>{Buttons.product}</Link>
            <Link href={'/Users'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><UsersRound/>{Buttons.users}</Link>
            <Link href={'/Sales'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><BadgeDollarSign/>{Buttons.sales}</Link>
            <Link href={'/Orders'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><CalendarArrowUp/>{Buttons.orders}</Link>
            <Link href={'/Anal'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><ChartNoAxesCombined/>{Buttons.analytics}</Link>
            <Link href={'/Settings'} className='flex flex-wrap justify-between m-4 p-2 rounded-lg hover:bg-slate-600 duration-100'><Settings />{Buttons.setting}</Link>
        </nav>
    </div>
  )
}

export default Navbar

