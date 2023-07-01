export default function Contact({ url, color, icon, children }) {
  return <a
    href={url} target="_blank" rel="noreferrer"
    className="p-2 w-fit max-w-[50%] max-md:min-w-[50%] rounded-lg flex max-md:flex-col max-md:w-fit flex-1 gap-4 text-xl font-medium items-center hover:brightness-125 transition-all !no-underline"
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
