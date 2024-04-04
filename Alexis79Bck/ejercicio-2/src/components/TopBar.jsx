/* eslint-disable react/prop-types */

export default function TopBar(props) {
 
  const {title, subtitle} = props;
  return (
    <div className="max-w-screen-xl w-full px-3 mb-6 flex flex-row flex-wrap items-center bg-indigo-800 border-b-2 border-orange-400 shadow-[0_35px_60px_-15px_rgba(255,186,96,0.75)] mx-auto h-16">
        <div className=" text-orange-200 text-4xl text-center mx-auto" >
            { title }
        </div>        
        
        <div className="container w-full mx-auto text-indigo-200 text-center text-sm">
            { subtitle }
        </div>
    </div>
  )
}
