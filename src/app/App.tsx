import { FC, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import routesList from './routes/routesList'
import config from '../shared/routes/config'


export const App: FC = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(config.catalog)
	}, [])

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