import profile_picture from "../../assets/profile_picture.png"

export default function Picture() {
  return <svg viewBox="0 0 100 100" className="max-w-sm" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id="mask">
        <path fill="white"
          d="M24.9,-35.7C30.7,-30.1,32.6,-20.7,31.4,-12.9C30.2,-5.2,25.8,0.9,23.8,7.9C21.8,14.9,22.1,22.9,18.5,28.7C15,34.4,7.5,37.9,-0.4,38.5C-8.3,39.1,-16.6,36.7,-22.4,31.7C-28.2,26.6,-31.4,18.9,-35,10.7C-38.7,2.5,-42.6,-6.3,-41.1,-14.1C-39.6,-21.8,-32.5,-28.4,-24.8,-33.4C-17,-38.4,-8.5,-41.7,0.5,-42.4C9.6,-43.2,19.1,-41.4,24.9,-35.7Z"
          width="100%" height="100%" transform="translate(51 52) scale(1.2)">
        </path>
      </mask>
    </defs>
    <image href={profile_picture} mask="url(#mask)" width="100%" height="100%" />
    <path fill="none" className="dark:stroke-slate-200 stroke-slate-800"
      d="M24.9,-35.7C30.7,-30.1,32.6,-20.7,31.4,-12.9C30.2,-5.2,25.8,0.9,23.8,7.9C21.8,14.9,22.1,22.9,18.5,28.7C15,34.4,7.5,37.9,-0.4,38.5C-8.3,39.1,-16.6,36.7,-22.4,31.7C-28.2,26.6,-31.4,18.9,-35,10.7C-38.7,2.5,-42.6,-6.3,-41.1,-14.1C-39.6,-21.8,-32.5,-28.4,-24.8,-33.4C-17,-38.4,-8.5,-41.7,0.5,-42.4C9.6,-43.2,19.1,-41.4,24.9,-35.7Z"
      width="100%" height="100%" transform="translate(51 52) scale(1.2)">
    </path>
  </svg>
}
