import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
  
  const VaccinationCoverage =(props) =>{
    const {VaccinationCoverage} = props
    console.log(VaccinationCoverage)
    const{dose_1,dose_2,vaccine_date} = VaccinationCoverage
    const DataFormatter = (number) => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
      }
    

    return(
        <ResponsiveContainer  width={1000} height={300}>
        <BarChart 
          data={VaccinationCoverage}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose_1" fill="#f54394" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose_2" fill="#5a8dee" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
  export default VaccinationCoverage