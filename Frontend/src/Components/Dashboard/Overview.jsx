import Button from './Button'

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border-2 border-black">
    <div className="text-lg md:text-xl font-bold">{value}</div>
    <div className="text-[10px] md:text-xs text-center">{label}</div>
  </div>
)

const Overview = ({ trainer }) => {
  return (
    <div className="p-4 md:p-6 h-96 bg-yellow-300 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <img
          src={"https://i.pinimg.com/736x/67/16/50/6716506ece297b94c625646e05bf091f.jpg" || "/placeholder.svg"}
          alt=""
          className="w-full md:w-48 h-40 md:h-64 rounded-lg object-cover border-2 border-black"
        />
        <div className="flex-1 space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">{trainer.name}</h2>
          <p className="text-sm">{trainer.email}</p>
          
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 ">
            <Stat value="10+" label="experience" />
            <Stat value="#1" label="on platform" />
            <Stat value="5 ya" label="teaching" />
            <Stat value="12" label="courses" />
          </div>
          
          <p className="text-xs md:text-sm">{trainer.bio}</p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button>Request session</Button>
            <Button variant="secondary">Portfolio</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
