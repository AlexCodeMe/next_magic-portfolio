import Image from "next/image"
import bg from '../../../../public/background/projects-background.png'
import { projectsData } from "../../data"
import ProjectList from '@/components/projects'
import RenderModel from "@/components/RenderModel"
import Staff from "@/components/models/Staff"

export default function Home() {
  return (
    <>
      <Image 
        src={bg} 
        alt='background image' 
        className='-z-50 w-full h-full fixed top-16 lg:top-0 left-0 object-cover object-center opacity-25' 
        fill
      />
      <ProjectList projects={projectsData} />
      <div className='flex items-center justify-center fixed top-20 left-1/2 -translate-x-1/2 lg:translate-x-0 -z-10 lg:-left-24 h-screen'>
        <RenderModel>
            <Staff />
        </RenderModel>  
      </div>
    </>
  );
}
