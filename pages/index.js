import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from  '../styles/Home.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
  maintainAspectRatio: false
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      data: [150,73,83,75,90,155,160,170,180,175,195,220],
      backgroundColor: 'rgba(116,227,170,90)',
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
    }
  ],
};

export default function Home() {
  return (
   <div className={styles.container}>
      <h1>Chart challenge @DataSystems</h1>
      <div className={styles.datawrapper}>
      <div className={styles.topcontainer}><h4>Mentee registration trend</h4> <select><option>Filter by current year</option></select></div>
        <Bar options={options} data={data}  width={"30%"}/>
        </div>
   </div>
  )
}
