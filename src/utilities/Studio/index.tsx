import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

class Studio {
  public static coverImage = async (
    dictionary: Dictionary,
    title?: string
  ) => {
    const avatarSrc = Uint8Array.from(await readFile(join(
      process.cwd(), "public/assets/images/me.png"
    ))).buffer

    return new ImageResponse(<div
      style={{
        fontFamily: "DM Sans, sans-serif",
        width: "100%",
        color: "white",
        height: "100%",
        display: "flex",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#2d2a32",
        backgroundImage: "linear-gradient(180deg," +
          "#161417 0%," +
          "#161417 34%," +
          "#232127 34%," +
          "#232127 100%" +
          ")",
        backgroundSize: "1200px 630px"
      }}
    >
      <img // eslint-disable-line @next/next/no-img-element
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - Officially supported by Next.js
        src={avatarSrc}
        alt={dictionary.metadata.identity}
        width="256"
        height="256"
        style={{
          border: "4px solid #a9a5ab",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center"
        }}
      />

      <span style={{
        fontSize: "4rem",
        color: "#d2cfd3"
      }}>
        Furkan Baytekin
      </span>

      <span style={{
        color: "#a9a5ab",
        fontSize: "2.5rem"
      }}>
        The Open Sourcerer
      </span>

      {title &&
        <span style={
          {
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3.5rem",
            lineHeight: "1",
            textAlign: "center",
            fontWeight: 400,
            color: "#ebdef0"
          }
        }>
          {title}
        </span>
      }
    </div>, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600"
      }
    })
  }
}

export default Studio