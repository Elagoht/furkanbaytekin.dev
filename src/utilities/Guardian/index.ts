import {
  ReadonlyHeaders
} from "next/dist/server/web/spec-extension/adapters/headers"
import Environment from "../Environment"

class Guardian {
  private readonly headers: ReadonlyHeaders

  constructor(headers: ReadonlyHeaders) {
    this.headers = headers
  }

  public get(key: string): string | null {
    return this.headers.get(key)
  }

  public checkTrust(): void {
    const token = this.get("Trusted-Software-Token")

    if (token !== Environment.TRUSTED_SOFTWARE_TOKEN)
      throw new GuardianError("Unauthorized")
  }

  public askIntention(): WebhookActionType {
    this.checkTrust()

    const action = this.get("Action")
    if (!action) throw new GuardianError("No action provided")

    if (!Guardian.ACTIONS.includes(action as WebhookActionType))
      throw new GuardianError("Invalid action")

    return action as WebhookActionType
  }

  private static readonly ACTIONS: WebhookActionType[] = [
    "blogs"
  ]
}

export class GuardianError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "GuardianError"
  }
}

export default Guardian