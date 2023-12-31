import { FC, ReactNode } from "react"

interface ContactProps {
  url: string
  color: string
  icon: ReactNode
  children: ReactNode
}

const Contact: FC<ContactProps> = ({ url, color, icon, children }) => {

  return <a
    href={url} target="_blank" rel="noreferrer"
    className="p-2 w-fit rounded-lg flex max-md:flex-col max-md:w-fit gap-4 text-xl basis-1/3 font-medium items-center hover:brightness-125 transition-all !no-underline"
  >
    <div
      className={`p-4 rounded-full text-neutral-200 border-2 border-neutral-800 dark:border-neutral-200`}
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    {children}
  </ a>
}
export default Contact