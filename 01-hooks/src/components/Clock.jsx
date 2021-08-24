import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [time, setTime] = useState("13:37:00")

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
			{time}
		</div>
	)
}

export default Clock
