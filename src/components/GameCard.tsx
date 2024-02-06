import GameImage from "../../public/gameImage.jpg";

const GameCard = () => {
  return (
    <div className='h-60 '>
      <div className='mb-auto w-64 relative hover:-translate-y-4 duration-500'>
        <p className='absolute top-2 right-8 bg-indigo-700 rounded-lg text-sm px-2 w-fit text-gray-300'>
          80
        </p>
        <div className='gap-y-1'>
          <figure>
            <img
              className='w-60 h-40 object-cover rounded-lg'
              src={GameImage}
              alt='game'
            />
          </figure>
          <h1 className='text-slate-400 px-1 pt-1'>Hollow Knight: Silksong</h1>
          <p className='text-sm text-slate-500 px-1'>Action</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;