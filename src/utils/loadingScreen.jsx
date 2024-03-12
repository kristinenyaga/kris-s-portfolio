import {InfinitySpin} from 'react-loader-spinner'

function LoadingScreen() {
  return (
    <div className="loading-screen  bg-black text-white">
      <InfinitySpin color="grey" />
      <p className='font_opensans lg:text-5xl text-3xl opacity-70'>kris's portfolio...</p>
    </div>
  );
}

export default LoadingScreen;
