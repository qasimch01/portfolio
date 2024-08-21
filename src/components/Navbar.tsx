"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    
  > 
    <Menu setActive={setActive}> 

        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active}
        item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active}
        item="Our Services">
            <div className="flex flex-col space-y-4 text-sm ">
<HoveredLink href="/courses">All Services</HoveredLink>
<HoveredLink href="/courses">Web App</HoveredLink>
<HoveredLink href="/courses">Mobile App</HoveredLink>
<HoveredLink href="/courses">UI & UX</HoveredLink>
<HoveredLink href="/courses">Project Manager</HoveredLink>
</div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active}
        item="Contact Us">
        </MenuItem>
        
        </Link>
    </Menu>
  </div>
  )
}

export default Navbar