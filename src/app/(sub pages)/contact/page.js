import Image from "next/image"
import bg from '../../../../public/background/contact-background.png'
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image 
        src={bg} 
        alt='background image' 
        className='-z-50 w-full h-full fixed top-0 left-0 object-cover object-center opacity-25' 
        fill
      />

      <article className='relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8'>
        <div className='flex flex-col items-center justify-center space-y-6 w-3/4'>
          <h1 className='text-accent font-semibold text-center text-4xl capitalize'>Summon the Wizard</h1>
          <p className='text-center font-light text-sm xs:text-base'>Step into the circle of enchantment ... </p>
        </div>
        <Form />
      </article>
    </>
  );
}
