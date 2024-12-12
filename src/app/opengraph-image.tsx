import Studio from "@/utility/Studio"

export const runtime = "edge"
export const contentType = "image/png"
export const size = { width: 1200, height: 630 }
export const alt = "Furkan Baytekin's personal website"

const image = () => Studio.openGraphImage(
  "Personal Blog most likely about software development"
)

export default image