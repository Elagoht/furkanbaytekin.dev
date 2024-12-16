import Script from 'next/script'
import { FC } from 'react'
import {
  BlogPosting, Book, CreativeWorkSeries, Person,
  WithContext
} from 'schema-dts'

export type SchemaProps = {
  blueprint: WithContext<
    | Person
    | BlogPosting
    | CreativeWorkSeries
    | Book
  >
}

const Schema: FC<SchemaProps> = ({
  blueprint
}) => {
  return <Script
    id="schema-org"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(blueprint)
    }}
  />
}

export default Schema