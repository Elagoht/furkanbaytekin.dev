import img_teacher from "../../assets/teacher.jpg"

export default function Teacher() {
  return <svg viewBox="0 0 100 100" className="max-w-sm floating" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id="mask">
        <path fill="white"
          d="M25.3,-30.5C32.6,-24.1,38.2,-15.9,38,-8C37.9,-0.1,32.1,7.5,27.5,16.3C23,25.2,19.7,35.2,13.5,37.8C7.2,40.4,-2,35.6,-11.9,32.2C-21.8,28.8,-32.3,26.8,-38.2,20.3C-44.1,13.8,-45.4,2.8,-42.8,-6.8C-40.2,-16.3,-33.7,-24.3,-25.9,-30.7C-18.1,-37,-9.1,-41.6,0,-41.5C9,-41.5,18.1,-36.9,25.3,-30.5Z"
          width="100%" height="100%" transform="translate(53.5 52) scale(1.19)">
        </path>
      </mask>
    </defs>
    <image href={img_teacher} mask="url(#mask)" width="100%" height="100%" />
    <path fill="none" className="dark:stroke-slate-200 stroke-slate-800"
      d="M25.3,-30.5C32.6,-24.1,38.2,-15.9,38,-8C37.9,-0.1,32.1,7.5,27.5,16.3C23,25.2,19.7,35.2,13.5,37.8C7.2,40.4,-2,35.6,-11.9,32.2C-21.8,28.8,-32.3,26.8,-38.2,20.3C-44.1,13.8,-45.4,2.8,-42.8,-6.8C-40.2,-16.3,-33.7,-24.3,-25.9,-30.7C-18.1,-37,-9.1,-41.6,0,-41.5C9,-41.5,18.1,-36.9,25.3,-30.5Z"
      width="100%" height="100%" transform="translate(53.5 52) scale(1.19)">
    </path>
  </svg>
}
