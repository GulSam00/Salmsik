import { LandingPageHeader, LandingPageFooter } from './components';

const LandingPage = () => {
  return (
    <div className='relative m-[16px] flex flex-col gap-[16px] overflow-scroll text-center scrollbar-hide'>
      <LandingPageHeader />
      <img className='pb-[130px]' src='images/main_landing_image.webp' alt='main_landing_image' />

      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
