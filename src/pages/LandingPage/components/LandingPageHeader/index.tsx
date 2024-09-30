export default function LandingPageHeader() {
  return (
    <div className='rounded-lg bg-grey-0 p-[16px] text-left'>
      <div className='relative flex justify-between'>
        <div className='pb-[32px] text-body14M'>상식 테스트</div>
        <div>
          <img className='absolute right-0' alt='main_header_cha' src='images/main_header_cha.png' width={72} />
        </div>
      </div>
      <div className='text-head20B'>
        내가 모르는 상식을 <br />
        다른 사람들은 얼마나 알고 있을까?
      </div>
    </div>
  );
}
