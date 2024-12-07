import Aside from "@/components/layout/Aside"
import "@/design/globals.css"
import classNames from "classnames"
import { DM_Sans as DMSans } from "next/font/google"
import { FC } from "react"

const RootLayout: FC<LayoutComponent> = ({
  children
}) =>
  <html lang="en">
    <body className={classNames(
      "antialiased bg-neutral-100 dark:bg-neutral-800",
      "text-neutral-900 dark:text-neutral-100 h-screen p-4",
      font.className
    )}>
      <div role="presentation">
        <Aside />

        <main className="bg-neutral-50 dark:bg-neutral-900 p-8">
          {children}
        </main>
      </div>
    </body>
  </html>

const font = DMSans({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
})

export default RootLayout