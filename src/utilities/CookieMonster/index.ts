class CookieMonster {
  public static bake = (name: string, value: string, days?: number): void => {
    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = `; expires=${date.toUTCString()}`
    }
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/`
  }

  public static take = (name: string): string | null => {
    const cookieName = `${encodeURIComponent(name)}=`
    for (let cookie of document.cookie.split(";")) {
      cookie = cookie.trim()
      if (
        cookie.indexOf(cookieName) === 0
      ) return decodeURIComponent(
        cookie.substring(cookieName.length)
      )
    }
    return null
  }

  public static eat = (name: string): void => {
    this.bake(name, "", -1)
  }
}

export default CookieMonster