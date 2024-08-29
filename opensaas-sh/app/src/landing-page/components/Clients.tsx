import logo from '../../client/static/logo.png';
import AstroLogo from "../logos/AstroLogo";
import PrismaLogo from "../logos/PrismaLogo";
import OpenAILogo from "../logos/OpenAILogo";

export default function Clients() {
  return (
    <div className='mt-12 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-between gap-y-6'>
      <h2 className='mb-6 text-center font-semibold tracking-wide text-gray-500'>
        Built and Ships with
      </h2>

      <div className='mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl md:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none'>

        <img
          className='col-span-1 max-h-12 w-full object-contain grayscale opacity-100'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
          alt='React'
          height={48}
        />

        <img
          className='col-span-1 max-h-12 w-full object-contain grayscale opacity-60 dark:filter dark:brightness-0 dark:invert'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
          alt='NodeJS'
          height={48}
        />

        <img
          className='col-span-1 max-h-12 w-full object-contain grayscale opacity-80'
          src={logo}
          alt='Wasp'
          height={48}
        />

        <div className='flex justify-center col-span-1 max-h-12 w-full object-contain grayscale opacity-80'>
          <PrismaLogo />
        </div>

        <img
          className='col-span-1 max-h-12 w-full object-contain grayscale '
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png'
          alt='Tailwind CSS'
          height={48}
        />

        <img
          className='col-span-1 max-h-12 w-full object-contain grayscale opacity-80 dark:opacity-60 dark:filter dark:brightness-0 dark:invert'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png'
          alt='Stripe'
          height={48}
        />

        <div className='flex justify-center col-span-1 w-full max-h-12 object-contain grayscale opacity-75'>
          <AstroLogo />
        </div>

        <div className='flex justify-center col-span-1 w-full max-h-12 object-contain grayscale opacity-80'>
          <OpenAILogo />
        </div>

      </div>
    </div>
  )
}
