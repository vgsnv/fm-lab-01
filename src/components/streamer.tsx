import {useState} from 'react'

import {AudioContext, StreamerNode} from 'react-native-audio-api'

export const useStreamer = (audioContextRef: React.RefObject<AudioContext | null>) => {
	const [streamerNode, setStreamerNode] = useState<StreamerNode>()

	if (audioContextRef && !audioContextRef.current) {
		audioContextRef.current = new AudioContext()
	}

	const handlePlay = async (path: string) => {
		if (streamerNode) {
			streamerNode.stop()
		}

		const newStreamerNode = audioContextRef?.current?.createStreamer()

		if (newStreamerNode && audioContextRef && audioContextRef?.current) {
			console.log('newStreamerNode', newStreamerNode)
			console.log('streamerNode', streamerNode)

			setTimeout(() => {
				newStreamerNode.initialize(path)
				if (newStreamerNode && audioContextRef && audioContextRef?.current) {
					newStreamerNode.connect(audioContextRef?.current?.destination)
					newStreamerNode.start(audioContextRef?.current?.currentTime)
				}

				setStreamerNode(newStreamerNode)
			}, 100)
		}
	}

	const handleStop = async () => {
		if (streamerNode) {
			streamerNode.stop()
			setStreamerNode(undefined)
		}
	}

	return {
		status: !!streamerNode,
		handlePlay,
		handleStop,
	}
}
