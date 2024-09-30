import { useNavigate } from 'react-router-dom';

interface Props {
  size?: number;
}

function BackButton({ size = 24 }: Props) {
  const navigate = useNavigate();

  return (
    <button
      style={{ width: size, height: size }}
      onClick={() => navigate(-1)}
      className='flex items-center justify-center'
    >
      <img src='/icons/icon_arrow_l.svg' alt='go back' />
    </button>
  );
}

export default BackButton;
