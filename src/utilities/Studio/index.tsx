import { ImageResponse } from "next/og"

class Studio {
  public static coverImage = (
    dictionary: Dictionary,
    title?: string,
  ) => {
    const avatarURL = `${process.env.HOST_URL}/assets/images/me.png`
    const backgroundImage = `${process.env.HOST_URL}/assets/images/opengraph-bg.svg`

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
        backgroundColor: "#0A0A0A",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "1200px 630px"
      }}
    >
      <img // eslint-disable-line @next/next/no-img-element
        src={avatarURL}
        alt={dictionary.metadata.identity}
        width="256"
        height="256"
        style={{
          border: "4px solid #A0AEC0",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center"
        }}
      />

      <span style={{
        fontSize: "4rem"
      }}>
        Furkan Baytekin
      </span>

      <span style={{
        color: "#A0AEC0",
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
            color: "#428E97"
          }
        }>
          {title}
        </span>
      }
    </div>)
  }
}

export default Studio