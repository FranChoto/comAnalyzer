/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Alert from '../../components/alert/Alert';
import styles from './homeScreen.module.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, BarChart, Bar, YAxis, Pie, PieChart, Cell, Legend } from 'recharts';


function HomeScreen() {

    const [data, setData] = useState([]);

    const fetchData = async (url, setData) => {
        try {
            const response = await fetch(url);
            const dataGet = await response.json();
            setData(dataGet);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchAllData = async () => {
        await Promise.all([
            fetchData("http://172.25.8.215:2300/api/camera/getCameras", setData),
        ]);
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const online = data.filter((item) => item.status === 'online').length;
    const offline = data.filter((item) => item.status === 'offline').length;
    const warning = data.filter((item) => item.status === 'warning').length;


    const dataLine = [{ name: 'Ene', online: 600, offline: 600, amt: 2400 }, { name: 'Feb', online: 200, offline: 600, amt: 2400 }, { name: 'Mar', online: 400, offline: 7000, amt: 5000 }];
    const dataPie = [
        { name: 'Online', online: online, offline: 600, amt: 2400 },
        { name: 'Offline', online: offline, offline: 600, amt: 2400 },
        { name: 'Warning', online: warning, offline: 7000, amt: 5000 }
    ];
    const dataBar = [
        { name: 'Ciudadela', online: data.filter((item) => item.zone === 'Ciudadela' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Ciudadela' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Ciudadela' && item.status === 'warning').length, amt: 2400 },
        { name: 'Villa Bosch', online: data.filter((item) => item.zone === 'Villa Bosch' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Villa Bosch' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Villa Bosch' && item.status === 'warning').length, amt: 2400 },
        { name: 'Ciudad Jardin', online: data.filter((item) => item.zone === 'Ciudad Jardin' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Ciudad Jardin' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Ciudad Jardin' && item.status === 'warning').length, amt: 2100 },
        { name: 'Loma Hermosa', online: data.filter((item) => item.zone === 'Loma Hermosa' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Loma Hermosa' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Loma Hermosa' && item.status === 'warning').length, amt: 2700 },
        { name: 'Caseros Sur', online: data.filter((item) => item.zone === 'Caseros Sur' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Caseros Sur' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Caseros Sur' && item.status === 'warning').length, amt: 2200 },
        { name: 'Caseros Norte', online: data.filter((item) => item.zone === 'Caseros Norte' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Caseros Norte' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Caseros Norte' && item.status === 'warning').length, amt: 3400 },
        { name: 'Saenz Peña', online: data.filter((item) => item.zone === 'Saenz Peña' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Saenz Peña' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Saenz Peña' && item.status === 'warning').length, amt: 2500 },
        { name: 'Martin Coronado', online: data.filter((item) => item.zone === 'Martin Coronado' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Martin Coronado' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Martin Coronado' && item.status === 'warning').length, amt: 2900 },
        { name: 'Villa Raffo', online: data.filter((item) => item.zone === 'Villa Raffo' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Villa Raffo' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Villa Raffo' && item.status === 'warning').length, amt: 3100 },
        { name: 'COM', online: data.filter((item) => item.zone === 'COM' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'COM' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'COM' && item.status === 'warning').length, amt: 2600 },
        { name: '11 de Septiembre', online: data.filter((item) => item.zone === '11 de Septiembre' && item.status === 'online').length, offline: data.filter((item) => item.zone === '11 de Septiembre' && item.status === 'offline').length, warning: data.filter((item) => item.zone === '11 de Septiembre' && item.status === 'warning').length, amt: 3500 },
        { name: 'Remedios de Escalada', online: data.filter((item) => item.zone === 'Remedios de Escalada' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Remedios de Escalada' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Remedios de Escalada' && item.status === 'warning').length, amt: 4000 },
        { name: 'Churruca', online: data.filter((item) => item.zone === 'Churruca' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Churruca' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Churruca' && item.status === 'warning').length, amt: 2100 },
        { name: 'Jose Ingenieros', online: data.filter((item) => item.zone === 'Jose Ingenieros' && item.status === 'online').length, offline: data.filter((item) => item.zone === 'Jose Ingenieros' && item.status === 'offline').length, warning: data.filter((item) => item.zone === 'Jose Ingenieros' && item.status === 'warning').length, amt: 3700 }
    ];
    

    const COLORS = ['#39ff14', '#ff073a', '#f7ff00', '#FF8042'];

    // eslint-disable-next-line react/prop-types
    const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                <tspan fontSize="16" fontWeight="bold">{name}</tspan>
                <tspan x={x} dy="1.2em" fontSize="14">{value}</tspan>
            </text>
        );
    };

    const CustomTooltip = () => {
        return null;
    };

    const CustomXAxisTick = ({ x, y, payload, index }) => {
        const yOffset = index % 2 === 0 ? 8 : 22;
        return (
          <g transform={`translate(${x},${y})`}>
            <text
              x={0}
              y={0}
              dy={yOffset}
              textAnchor="middle"
              fill="#666"
              fontSize={12}
              fontWeight="bold"
            >
              {payload.value}
            </text>
          </g>
        );
      };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={`${styles.container} ${styles.mapa}`}>
                        <div className={styles.insideContainer}>
                            {/* cambiar grfico mensual aca y donde esta ahora poner la cantidad de camaeras por barrio como en el d check

                            hacer lista de camras que busque por campo

                            hacer lista de servidores y de camaras aparte */}

                            <BarChart
                                width={1000}
                                height={300}
                                data={dataBar}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 50,
                                }}
                            >
                                <XAxis dataKey="name" textAnchor="end" interval={0} tick={CustomXAxisTick} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="online" stackId="a" fill="#39ff14" />
                                <Bar dataKey="offline" stackId="a" fill="#ff073a" />
                                <Bar dataKey="warning" stackId="a" fill="#f7ff00" />
                            </BarChart>
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.alertas}`}>
                        <Alert />
                    </div>
                    <div className={`${styles.container} ${styles.grafico}`}>
                        <LineChart width={600} height={200} data={dataLine} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <CartesianGrid stroke="none" />
                            <Line type="monotone" dataKey="online" stroke="#ff0" yAxisId={0} label={{ position: 'top' }} />
                            <Line type="monotone" dataKey="offline" stroke="#f00" yAxisId={1} />
                        </LineChart>


                    </div>
                    <div className={`${styles.container} ${styles.porcentajes}`}>
                        <div className={styles.insideContainer}>
                            <div className={styles.graphContainer}>

                                <PieChart width={600} height={400}>
                                    <Pie
                                        data={dataPie}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="online"
                                        label={CustomLabel}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                                    </Pie>
                                    <Tooltip content={CustomTooltip} />
                                </PieChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;