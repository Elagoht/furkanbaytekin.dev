import Script from 'next/script'
import { FC } from 'react'
import { BlogPosting, Person, WithContext } from 'schema-dts'

type SchemaProps = {
  blueprint: WithContext<Person | BlogPosting>
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