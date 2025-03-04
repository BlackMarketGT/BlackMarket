import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"
import React from "react"

interface ListItemProps {
  className?: string
  title: string
  href: string
  children?: React.ReactNode
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink>
          <div>
            <h3 className="text-sm font-medium leading-none">{title}</h3>
            <p className="text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default ListItem 