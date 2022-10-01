export default function Home() {
  return (
    <>
      <div>
        <img src='./unknow_actor.jpg' width="200" />
        <b className='title'>Name</b>
        <div className='infoList'>
          <p>Gender:</p>
          <p>Male</p>
        </div>
        <div className='infoList'>
          <p>Birth Day:</p>
          <p>01/02/1976</p>
        </div>
        <div className='infoList'>
          <p>Eye color:</p>
          <p>Red</p>
        </div>
        <button>Next</button>
      </div>
    </>
  );
}
