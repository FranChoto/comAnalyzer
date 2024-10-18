/* eslint-disable react/prop-types */
import Alert from '../../components/alert/Alert';
import styles from './homeScreen.module.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, BarChart, Bar, YAxis, Pie, PieChart, Cell, Legend } from 'recharts';


function HomeScreen() {
    const data = [{ name: 'Ene', uv: 600, pv: 600, amt: 2400 }, { name: 'Feb', uv: 200, pv: 600, amt: 2400 }, { name: 'Mar', uv: 400, pv: 7000, amt: 5000 }];
    const dataPie = [
        { name: 'Ene', uv: 200, pv: 600, amt: 2400 },
        { name: 'Feb', uv: 200, pv: 600, amt: 2400 },
        { name: 'Mar', uv: 400, pv: 7000, amt: 5000 }
    ];
    const dataBar = [
        { name: 'Cuidadela', uv: 300, pv: 500, hv: 2400, amt: 2400 },
        { name: 'Villa Bosch', uv: 1000, pv: 600, amt: 2400 },
        { name: 'Villa Lynch', uv: 400, pv: 7000, amt: 5000 },
        { name: 'Ciudad Jardin', uv: 250, pv: 350, amt: 2100 },
        { name: 'Lona Hermosa', uv: 320, pv: 800, amt: 2700 },
        { name: 'Caseros Sur', uv: 180, pv: 450, amt: 2200 },
        { name: 'Caseros Norte', uv: 500, pv: 1200, amt: 3400 },
        { name: 'Saenz Peña', uv: 280, pv: 650, amt: 2500 },
        { name: 'Martin Coronado', uv: 360, pv: 900, amt: 2900 },
        { name: 'Villa Raffo', uv: 420, pv: 1100, amt: 3100 },
        { name: 'COM', uv: 290, pv: 400, amt: 2600 },
        { name: '11 de Septiembre', uv: 510, pv: 1300, amt: 3500 },
        { name: 'Remedios de Escalada', uv: 600, pv: 2000, amt: 4000 },
        { name: 'Churruca', uv: 230, pv: 500, amt: 2100 },
        { name: 'Jose Ingenieros', uv: 550, pv: 1400, amt: 3700 }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
                                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="hv" stackId="a" fill="#fff" />
                            </BarChart>
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
                            <Line type="monotone" dataKey="uv" stroke="#ff0" yAxisId={0} label={{ position: 'top' }} />
                            <Line type="monotone" dataKey="pv" stroke="#f00" yAxisId={1} />
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
                                        dataKey="uv"
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