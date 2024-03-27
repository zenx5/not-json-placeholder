
import RedButton from './RedButton'
import ImageCard from './ImageCard'

export default function Content() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
        <div className="mb-12">
            <RedButton />
        </div>    
        <div className="bg-indigo-500 p-4 h-screen-1/2 w-1/2">
            <ImageCard />
        </div>      
    </div>
  )
}
