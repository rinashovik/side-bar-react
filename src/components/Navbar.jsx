import React from 'react'

function Navbar() {
  return (
    <div className='container'>


{/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div> */}

    {/* <ul className=" container flex-row-reverse nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" >
  <li className="text-orange-500 nav-item" role="presentation">
    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li className=" text-blue-600 nav-item" role="presentation">
    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" >
<button className="bg-sky-500 hover:bg-sky-700 "> Contact</button>
  </li>
</ul> */}
    
    <ul className='container flex-row justify-between bg-blue-800 text-justify text-cyan-600	 mx-2 p-5'>
      <li>Home</li>
      <li>Profile</li>
      <li>Search</li>

    </ul>
    </div>


  )
}

export default Navbar