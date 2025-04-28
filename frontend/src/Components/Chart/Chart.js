import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    // Prepare data for expenses
    const expenseData = expenses.map((expense) => {
        return {
            date: dateFormat(expense.date),
            amount: expense.amount
        }
    })

    return (
        <ChartStyled>
            <ResponsiveContainer width="80%" height={300}>
                <BarChart data={expenseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="red" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    margin: 2rem auto;
    width: 90%; /* Makes the chart container width responsive and smaller */
    max-width: 700px; /* Set a max-width to control the overall width */
`;

export default Chart
