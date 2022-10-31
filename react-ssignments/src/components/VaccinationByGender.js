import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
  
  const VaccinationByGender =(props) =>{
    const{VaccinationByGender} = props
    const{age,count}  = VaccinationByGender
    return(
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={VaccinationByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
  export default VaccinationByGender