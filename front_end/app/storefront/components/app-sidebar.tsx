import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  
import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

// Menu items.
const sizes = [
  {
    title: "XS",
    url: "#",
    icon: Home,
  },
  {
    title: "S",
    url: "#",
    icon: Inbox,
  },
  {
    title: "M",
    url: "#",
    icon: Calendar,
  },
  {
    title: "L",
    url: "#",
    icon: Search,
  },
  {
    title: "XL",
    url: "#",
    icon: Settings,
  },
]

// Menu items.
const colors = [
    {
      title: "Red",
      url: "#",
      icon: Home,
    },
    {
      title: "Blue",
      url: "#",
      icon: Inbox,
    },
    {
      title: "White",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Grey",
      url: "#",
      icon: Search,
    },
    {
      title: "Green",
      url: "#",
      icon: Settings,
    },
  ]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                    Size
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {sizes.map((size) => (
                            <SidebarMenuItem key={size.title}>
                                <SidebarMenuItem className="p-2">
                                    <Checkbox className="mr-2"/>
                                    <span>{size.title}</span>
                                </SidebarMenuItem>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                    Color
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {colors.map((color) => (
                            <SidebarMenuItem key={color.title}>
                                <SidebarMenuItem className="p-2">
                                    <Checkbox className="mr-2"/>
                                    <span>{color.title}</span>
                                </SidebarMenuItem>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
