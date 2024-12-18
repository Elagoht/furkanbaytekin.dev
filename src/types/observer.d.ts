type ObserverIPHash = string // MD5 hash of the IP address to anonymize it
type ObserverRecord = Record<
  BlogPost["slug"], // Blog post slug
  Date // Date of the view
>

type ObserverMap = Record<
  ObserverIPHash,
  ObserverRecord
>
