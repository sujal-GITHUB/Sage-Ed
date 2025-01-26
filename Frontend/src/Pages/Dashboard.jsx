import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, setActiveItem } from '../store/navigationSlice'
import TrainerCard from "../components/TrainerCard"
import WorkExperience from "../components/WorkExperience"
import Reviews from "../components/Reviews"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import MobileMenu from '../components/MobileMenu'
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import WeeklyChart from '../components/WeeklyChart';
import ActivitiesDonut from '../components/ActivitiesDonut'

const trainer = {
  name: "Hillary Bale",
  email: "hb.bale@gmail.com",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E-learning%20platform%20in%20neo%20brutalism%20style-Uzro9eDVsk7kJ3BIS2NFODhBMoojMi.jpeg",
  bio: "I'm JavaScript trainer with over 10 years of experience in the software development industry. Passionate about teaching how to code and helping them develop their skills.",
}

const experiences = [
  {
    role: "Senior JavaScript Developer",
    company: "Finecoder Inc.",
    period: "May 2022 - present",
  },
  {
    role: "Senior JavaScript Developer",
    company: "Pro Property Maintenance",
    period: "May 2013 - Nov 2022",
  },
  {
    role: "Senior JavaScript Developer",
    company: "Cut Rite Lawn Care",
    period: "May 2012 - Nov 2013",
  },
]

const reviews = [
  {
    name: "Nicol W.",
    rating: 4.6,
    text: "The progress I have made since starting React is incredible. Hillary explains concepts well in short periods of time periods.",
  },
  {
    name: "Stephanie H.",
    rating: 4.7,
    text: "I feel like I learned months in a week. I love how she gave me great challenges to help me understand concepts.",
  },
  {
    name: "Yami F.",
    rating: 4.3,
    text: "Brilliant learning experience. Very interactive, literally a learning really labs in the making. Learned a lot about learning by practice.",
  },
]

const Landing = () => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen, activeItem } = useSelector(state => state.navigation)

  return (
    <div className="min-h-screen font-mono">
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        onClick={() => dispatch(toggleMobileMenu())}
      >
        <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
      </button>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        activeItem={activeItem}
        onItemClick={(id) => {
          dispatch(setActiveItem(id))
          dispatch(toggleMobileMenu())
        }}
      />

      <div className="hidden md:block">
        <Sidebar 
          activeItem={activeItem}
          onItemClick={(id) => dispatch(setActiveItem(id))}
        />
      </div>

      <Navbar />

      <main className="ml-0 md:ml-56 p-4 pt-16 md:p-8 md:pt-16">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <section className='grid grid-cols-12 gap-4 md:gap-6'>
            <div className="col-span-12 lg:col-span-8">
              <TrainerCard trainer={trainer}/>
            </div>
            <div className="col-span-12 lg:col-span-4 p-4 md:p-6 bg-green-200 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                  sx={{
                    width: '100%',
                    '& .MuiPickersDay-root': {
                      borderRadius: '8px',
                      border: '2px solid black',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'black',
                        },
                      },
                    },
                    '& .MuiPickersCalendarHeader-root': {
                      borderBottom: '2px solid black',
                      marginBottom: '1rem',
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          </section>
          

          <section className='grid grid-cols-12 gap-4 md:gap-6'>
            <div className='col-span-12 md:col-span-5'>
              <ActivitiesDonut/>
            </div>
            <div className='col-span-12 md:col-span-7'>
              <WeeklyChart />
            </div>
          </section>

          <section>
            <WorkExperience experiences={experiences} />
          </section>

          <section>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold">Students reviews</h2>
              <button className="text-sm underline">View all</button>
            </div>
            <Reviews rating={4.4} totalReviews={127} reviews={reviews} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Landing
