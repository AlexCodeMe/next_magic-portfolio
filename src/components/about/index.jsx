import clsx from "clsx"
import ItemLayout from "./ItemLayout"

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                    Architech of Magic
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>My journey in webdevelopment ... TODO Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, voluptates?</p>
            </ItemLayout>

            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    25+ <sub className='font-semibold text-base'>clients</sub>
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <div className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    4+ <sub className='font-semibold text-base'>years of experience</sub>
                </div>
            </ItemLayout>

            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=AlexCodeMe&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false' alt='github stats' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className='w-full h- auto' src='https://github-readme-stats.vercel.app/api?username=AlexCodeMe&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false' alt='github stats' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img className='w-full h-auto' src='https://skillicons.dev/icons?i=apple,js,ts,html,css,react,express,nodejs,nextjs,babel,java,spring,bash,figma,github,androidstudio,kotlin' alt='github stats' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=AlexCodeMe&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B&sideNums=EBEBEB&sideLabels=EBEBEB&currStreakNum=EBEBEB" alt="AlexCodeMe" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className='w-full h- auto' src='https://github-readme-stats.vercel.app/api/pin/?username=AlexCodeMe&repo=next_portfolio-yt&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&description-line-count=2' alt='github stats' loading='lazy' />
            </ItemLayout>
            

        </div>
    </section>
  )
}

export default AboutDetails