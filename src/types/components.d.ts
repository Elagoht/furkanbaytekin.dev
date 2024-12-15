type ParentComponent<Props = object> = {
  children: React.ReactNode
} & Props

type PageComponent<Context = object> = {
  params: Promise<Context>
  searchParams: Promise<Record<string, string | undefined>>
}