import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [time, setTime] = useState("13:37:00")

	useEffect(() => {
		console.log("🕰🔨 Clock is mounted 😊")

		return () => {
			console.log("🕰💥 Clock is being unmounted 😨")
		}
	}, [])

	return (
		<div>
			{time}
		</div>
	)
}

export default Clock
