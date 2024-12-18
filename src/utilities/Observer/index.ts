import { NextRequest } from "next/server"
import Drawer from "../Drawer"

// Greetings to Rational Observer!

class Observer {
  static instance: Observer
  private static observationMap: ObserverMap
  private static lastMemoryClean: Date
  private static readonly CLEAR_OLDER_THAN = 1000 * 60 * 10 // 10 minutes
  private static readonly MAX_CLEAN_INTERVAL = 1000 * 60 * 10 // 10 minutes

  private constructor() {
    Observer.observationMap = {}
    Observer.lastMemoryClean = new Date()
  }

  public static getInstance(): Observer {
    if (!this.instance) this.instance = new Observer()
    return this.instance
  }

  public async observe(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (!Observer.shouldTrackThisPage(pathname)) return

    const slug = this.getSlugToAdd(pathname)
    const ipHash = await this.getIpHash(request)

    if (!slug || !ipHash) return

    if (!this.hasRecentView(ipHash, slug)) {
      this.addView(ipHash, slug, new Date())
      this.incrementBlogView(slug)
    }

    if (this.doNeedMemoryClean()) this.clearOldObservations()
  }

  private clearOldObservations(): void {
    const now = new Date()

    for (const ipHash in Observer.observationMap) {
      const record = Observer.observationMap[ipHash]
      for (const slug in record) {
        if (now.getTime() - record[slug].getTime()
          > Observer.CLEAR_OLDER_THAN
        ) delete record[slug]
      }
      if (Object.keys(record).length === 0)
        delete Observer.observationMap[ipHash]
    }

    Observer.lastMemoryClean = now
  }

  private hasRecentView(
    ipHash: ObserverIPHash,
    slug: BlogCardData["slug"]
  ): boolean {
    const record = Observer.observationMap[ipHash]
    if (!record || !record[slug]) return false

    const lastView = record[slug]
    return new Date().getTime() - lastView.getTime()
      <= Observer.CLEAR_OLDER_THAN
  }

  private addView(
    ipHash: ObserverIPHash,
    slug: BlogCardData["slug"],
    date: Date
  ): void {
    if (!Observer.observationMap[ipHash])
      Observer.observationMap[ipHash] = {}
    Observer.observationMap[ipHash][slug] = date
  }

  private doNeedMemoryClean(): boolean {
    const now = new Date()
    return now.getTime() - Observer.lastMemoryClean.getTime()
      >= Observer.MAX_CLEAN_INTERVAL
  }

  private getSlugToAdd(pathname: string): BlogCardData["slug"] | null {
    const match = pathname.match(/\/blogs\/[^/]+\/([^/]+)/)
    return match ? match[1] : null
  }

  private static shouldTrackThisPage(pathname: string): boolean {
    return /^\/blogs\/[^/]+\/[^/]+$/.test(pathname)
  }

  private incrementBlogView(slug: BlogCardData["slug"]): void {
    Drawer.increseBlogView(slug)
  }

  private async getIpHash(
    request: NextRequest
  ): Promise<ObserverIPHash | null> {
    const ip = this.getIpAddress(request)
    if (!ip) return null

    const data = new TextEncoder().encode(ip)

    const hashBuffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  }

  private getIpAddress(request: NextRequest): string | null {
    return request.headers.get("x-forwarded-for")
  }
}
export default Observer
