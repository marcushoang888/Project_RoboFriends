export default function Scroll({children}) {
  return (
    <div className=" overflow-y-scroll h-[800px] border-[5px] border-solid border-black">
        {children}
    </div>
  )
}
