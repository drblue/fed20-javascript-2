import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../contexts/ThemeContextProvider'

const Clock = () => {

	const { theme } = useThemeContext()

	const [time, setTime] = useState(() => {
		const now = new Date()
		return now.toLocaleTimeString()
	})

	useEffect(() => {
		console.log("🕰🔨 Clock is mounted 😊 Timer started ⏲")

		const intervalId = setInterval(() => {
			// Update time with a tick
			console.log('tick')
			const now = new Date();
			setTime(now.toLocaleTimeString())
		}, 1000);

		return () => {
			console.log("🕰💥 Clock is being unmounted 😨 Stopping timer 😅")
			clearInterval(intervalId)
		}
	}, [])

	return (
		<div>
			<div>{time}</div>
			<p className="display-6">You're using {theme} mode.</p>
		</div>
	)
}

export default Clock
