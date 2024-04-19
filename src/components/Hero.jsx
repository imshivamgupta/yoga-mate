
import Lottie from 'react-lottie';
import animationData from '../lotties/job.json'

const defaultOptions = {
loop: true,
autoplay: true,
animationData: animationData,
rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
}
};

const Hero = ({
  title = 'Your Pathway to Inner Peace',
  subtitle = 'Find Your Zen: Introducing Yoga Focus - Your Pathway to Inner Peace',
}) => {
  return (
    <section className='bg-indigo-700  mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="grid grid-cols-3 gap-4">

        <div className="">   
            <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            />
        </div>
        <div className="flex items-center col-span-2">
            <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                {title}
            </h1>
            <p className='my-4 text-xl text-white'>{subtitle}</p>
            
            </div>
        </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;