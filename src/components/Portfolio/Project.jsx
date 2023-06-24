export default function Project({ img, children }) {
  return <div className="project-container">
    <img className="w-1/2 max-md:w-full object-contain" src={img} alt="Laptop Mockup" />
    <div className="w-1/2 max-md:w-full flex flex-col gap-2 justify-center">
      {children}
    </div>
  </div>
}
