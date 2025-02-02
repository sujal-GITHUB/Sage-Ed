import React from 'react';
import { Chart as
   ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Roadmap from '../Dashboard/Roadmap';
import { BellIcon, SearchIcon, SparklesIcon } from '@heroicons/react/outline';
import { UserCircleIcon, ShoppingCartIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/solid';
import { Robot } from '@phosphor-icons/react';
import bear from '../../assets/bear.png'
import VoiceAssistant from '../Dashboard/VoiceAssistant';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2
        
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          weight: 'medium'
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          weight: 'medium'
        }
      }
    }
  }
};

const milestoneData = {
  
  labels: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database', 'System Design'],
  datasets: [
    {
      label: 'Progress',
      data: [60, 85, 70, 89, 30, 65],
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 8,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#000000',
      pointBorderWidth: 2,
      fill: true,
    },
  ],
};

const Home = () => {
  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Hours Spent',
        data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0],
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 12,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: function(value) {
            return value + 'h';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="w-full mx-auto space-y-6 md:space-y-8 pb-5">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-[#d7e933] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Hello, Nice to Have You Back! 
            
          </h1>
          <p className="text-gray-700 mt-2">Ready to continue your journey?</p>
        </div>
          <img src={bear} alt="" className='h-48'/>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Users', value: '2,340', Icon: UsersIcon, color: 'bg-blue-100' },
          { title: 'NFTs', value: '$12,450', Icon: CurrencyDollarIcon, color: 'bg-green-100' },
          { title: 'Orders', value: '450', Icon: ShoppingCartIcon, color: 'bg-yellow-100' },
          { title: 'Active Users', value: '1,200', Icon: UserCircleIcon, color: 'bg-pink-100' },
        ].map((stat, index) => (
          <div key={index} className="p-6 bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.Icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium">{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap Section */}
      <div className="p-6 bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <Roadmap data={milestoneData} options={chartOptions} />
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="p-6 bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">User Activity</h3>
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="p-6 bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { id: 1, title: 'New milestone reached #1', time: '2 hours ago' },
                { id: 2, title: 'Completed React module', time: '4 hours ago' },
                { id: 3, title: 'Achieved 1000 points', time: '1 day ago' }
              ].map((item) => (
                <div key={item.id} className="p-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group">
                  <p className="font-bold group-hover:text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0'>
      <VoiceAssistant/>
      </div>
    </div>
  )
}

export default Home;