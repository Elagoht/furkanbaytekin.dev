import Script from "next/script"
import { FC } from "react"
import { BlogPosting, Person, WithContext } from "schema-dts"

type SchemaProps = {
  schema: WithContext<Person | BlogPosting>
}

export const Schema: FC<SchemaProps> = ({
  schema
}) =>
  <Script
    id="schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema)
    }}
  />

export default Schema