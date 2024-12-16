import { Redirect, Rewrite } from "next/dist/lib/load-custom-routes"

class TrafficSign {
  public static getRedirects(): Promise<Redirect[]> {
    return Promise.resolve([
      ...TrafficSign.permanentlyMoved.map(redirect =>
        TrafficSign.convertToRedirect(redirect, 301)
      ),
      ...TrafficSign.canBeFoundOn.map(redirect =>
        TrafficSign.convertToRedirect(redirect, 302)
      )
    ])
  }

  public static getRewrites(): Promise<Rewrite[]> {
    return Promise.resolve(TrafficSign.rewrites.map(
      TrafficSign.convertToRewrite
    ))
  }

  private static convertToRedirect(
    redirect: [string, string],
    statusCode: 301 | 302
  ): Redirect {
    return {
      source: redirect[0],
      destination: redirect[1],
      statusCode
    }
  }

  private static convertToRewrite(rewrite: [string, string]): Rewrite {
    return {
      source: rewrite[0],
      destination: rewrite[1]
    }
  }

  private static permanentlyMoved: [string, string][] = []

  private static canBeFoundOn: [string, string][] = [
    ["/home", "/"]
  ]

  private static rewrites: [string, string][] = []
}

export default TrafficSign