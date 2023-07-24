import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import routesList from './routes/routesList'


export const App: FC = () => {

	return (
		<Routes>
			{
				routesList.map((obj, index) => (
					<Route key={index} {...obj} />
				))
			}
		</Routes>
	)
}