import Dictate from "@/utilities/Dictionary"
import { IconZoom } from "@tabler/icons-react"
import QueryString from "qs"
import { FC } from "react"

type SearchBoxProps = {
  pathname: string
  searchParams: Record<string, string | undefined>
  queryParameterName?: string
}

const SearchBox: FC<SearchBoxProps> = ({
  pathname, searchParams, queryParameterName = "search"
}) => {
  const currentSearch = searchParams[queryParameterName] || ""
  const dictionary = Dictate.en

  return <form
    method="GET"
    action={`${pathname}${QueryString.stringify(searchParams, {
      addQueryPrefix: true,
      skipNulls: true
    })}`}
    className="flex gap-4"
  >
    <input
      type="search"
      name={queryParameterName}
      defaultValue={currentSearch}
      placeholder={dictionary.pages.common.search}
      className="grow border bg-fedora-100 dark:bg-fedora-800
      text-fedora-800 dark:text-fedora-200 border-fedora-300
      dark:border-fedora-700 rounded-full px-4 py-2 focus:outline-none
      focus:border-pinky-500 dark:focus:border-pinky-500 min-w-0"
    />

    <button
      type="submit"
      className="bg-pinky-500 dark:bg-pinky-700 text-white dark:text-fedora-200
      hover:bg-pinky-400 dark:hover:bg-pinky-800 rounded-full px-4 py-2 border
      border-pinky-700 dark:border-pinky-500 focus:outline-none"
    >
      <IconZoom size={24} />
    </button>
  </form>
}

export default SearchBox