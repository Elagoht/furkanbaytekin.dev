import { RemotePattern } from "next/dist/shared/lib/image-config"
import path from "path"
import Environment from "../Environment"

class Picture {
  private static defaultSource: string = Environment.CMS_API_URL

  public static resolve = (src: string | null): string => {
    if (!src) return "/assets/images/placeholder.webp"
    if (src.startsWith("http")) return src
    return path.join(Picture.defaultSource, src)
  }

  public static getRemotePaths = (): RemotePattern[] => {
    return Picture.remotePaths.map(Picture.convertToRemotePaths)
  }

  private static convertToRemotePaths = (
    remotePath: [
      RemotePattern["protocol"],
      RemotePattern["hostname"]
    ]
  ): RemotePattern => {
    return {
      protocol: remotePath[0],
      hostname: remotePath[1]
    }
  }

  private static remotePaths: [
    RemotePattern["protocol"],
    RemotePattern["hostname"]
  ][] = [
      ["http", "localhost"]
    ]
}

export default Picture