export default function Lesson({ img, children }) {
  return <div className="content-container">
    <img className="w-1/2 max-md:w-full object-contain" src={img} alt="Course Banner" />
    <div className="w-1/2 max-md:w-full max-md:pb-16 max-md:border-b-2 max-md:border-b-neutral-300 flex flex-col gap-2 justify-center">
      {children}
    </div>
  </div>
}
