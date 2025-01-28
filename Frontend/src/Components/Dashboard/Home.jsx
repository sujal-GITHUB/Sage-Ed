import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import WeeklyChart from './WeeklyChart'
import ActivitiesDonut from './ActivitiesDonut'
import Overview from './Overview'
import VoiceAssistant from './VoiceAssistant'
import { trainer } from '../../data/trainerData'
import Clock from '../Dashboard/Clock'

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 p-4">
      {/* First Row */}
      <section className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h2 className="text-4xl font-bold mb-6">Overview</h2>
            <Overview trainer={trainer} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar 
                sx={{
                  width: '100%',
                  height: '100%',
                  '& .MuiPickersCalendarHeader-root': {
                    borderBottom: '2px solid black',
                    marginBottom: '0.5rem',
                    paddingBottom: '0.25rem',
                    minHeight: '40px',
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  },
                  '& .MuiDayCalendar-header': {
                    paddingY: '0.25rem',
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  },
                  '& .MuiPickersDay-root': {
                    fontSize: '0.875rem',
                    border: '2px solid black',
                    borderRadius: '0.5rem',
                    margin: '3px',
                    padding: '0',
                    width: '32px',
                    height: '32px',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  },
                  '& .MuiIconButton-root': {
                    border: '2px solid black',
                    borderRadius: '0.5rem',
                    padding: '2px',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  }
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </section>

      {/* Second Row */}
      <section className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h2 className="text-4xl font-bold mb-6">Weekly Progress</h2>
            <WeeklyChart />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="p-6 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h2 className="text-4xl font-bold mb-6">Activities</h2>
            <ActivitiesDonut />
          </div>
        </div>
      </section>

      <div className='fixed bottom-0 right-0'>
      <VoiceAssistant />
      </div>
    </div>
  )
}

export default Home