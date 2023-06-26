export default function ShowCase({ img, children }) {
  return <div className="content-container">
    <img className="w-1/2 max-md:w-full object-contain" src={img} alt="Laptop Mockup" />
    <div className="w-1/2 max-md:w-full max-md:pb-16 flex flex-col gap-4 justify-center">
      {children}
    </div>
  </div>
}
