import english from "@/i18n/en.json"

class Dictate {
  public static en = english
}

export default Dictate

declare global {
  /**
   * All i18n dictionaries are merged into this
   * type and must contain exactly the same keys
   */
  type Dictionary = typeof Dictate.en
}