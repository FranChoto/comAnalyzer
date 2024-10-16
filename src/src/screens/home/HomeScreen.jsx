import Alert from '../../components/alert/Alert';
import styles from './homeScreen.module.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, BarChart, Bar, YAxis } from 'recharts';


function HomeScreen() {
    const data = [{ name: 'Ene', uv: 600, pv: 600, amt: 2400 }, { name: 'Feb', uv: 200, pv: 600, amt: 2400 }, { name: 'Mar', uv: 400, pv: 7000, amt: 5000 }];


    return (
        <>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={`${styles.container} ${styles.mapa}`}>
                        <div className={styles.insideContainer}>
                            cambiar grfico mensual aca y donde esta ahora poner la cantidad de camaeras por barrio como en el d check

                            hacer lista de camras que busque por campo

                            hacer lista de servidores y de camaras aparte
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.alertas}`}>
                        <Alert />
                    </div>
                    <div className={`${styles.container} ${styles.grafico}`}>
                        <LineChart width={600} height={200} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <CartesianGrid stroke="none" />
                            <Line type="monotone" dataKey="uv" stroke="#ff0" yAxisId={0} label={{ position: 'top'}} />
                            <Line type="monotone" dataKey="pv" stroke="#f00" yAxisId={1} />
                        </LineChart>


                    </div>
                    <div className={`${styles.container} ${styles.porcentajes}`}>
                        <div className={styles.insideContainer}>
                            {/* <Chart chartType="ColumnChart"  data={dataBar} options={options} /> */}
                            <div className={styles.graphContainer}>
                                <BarChart width={600} height={300} data={data}>
                                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} />
                                    <YAxis />
                                    <Bar dataKey="uv" fill="#8884d8" barSize={30} label={{ position: 'top' }} />
                                </BarChart>
                            </div>


                            {/* ChartType: Column chart */}




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;


