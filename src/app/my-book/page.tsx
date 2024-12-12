import Content from "@/components/layout/Content"
import dictionary from "@/lang"
import { FC } from "react"

const MyBookPage: FC = () => {
  return <Content className="prose dark:prose-invert prose-stone
    prose-lg max-w-screen-lg mx-auto">
    <h1 className="text-3xl font-semibold">
      {dictionary.myBook.title}
    </h1>

    <p
      className="p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 rounded-lg"
      dangerouslySetInnerHTML={{
        __html: dictionary.myBook.description
      }}
    />
  </Content>
}

export default MyBookPage