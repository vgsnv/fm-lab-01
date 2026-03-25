import {useRef, useState} from 'react'

import {AudioContext, StreamerNode} from 'react-native-audio-api'

export const useAudioContext = () => {
	const [streamerNode, setStreamerNode] = useState<StreamerNode>()

	const audioContextRef = useRef<AudioContext | null>(null)

	const handlePlay = async (path: string, cb: () => void) => {
		if (!streamerNode) {
			audioContextRef.current = new AudioContext()

			const audioContext = audioContextRef?.current

			const streamer = audioContextStart({
				audioContext,
				path,
			})

			setStreamerNode(streamer)
		}

		if (streamerNode) {
			const audioContext = audioContextRef?.current

			if (audioContext) {
				audioContextStop({
					audioContext,
					streamerNode,
				})

				audioContextRef.current = new AudioContext()

				const newAudioContext = audioContextRef?.current

				const streamer = audioContextStart({
					audioContext: newAudioContext,
					path,
				})

				setStreamerNode(streamer)
			}
		}
		cb()
	}

	const handleStop = async (cb: () => void) => {
		const audioContext = audioContextRef?.current

		if (audioContext && streamerNode) {
			audioContextStop({
				audioContext,
				streamerNode,
			})
		}
		cb()
	}

	return {
		status: !!streamerNode,
		handlePlay,
		handleStop,
	}
}

const audioContextStart = ({audioContext, path}: {audioContext: AudioContext; path: string}) => {
	const streamer = audioContext?.createStreamer()

	if (streamer && audioContext) {
		streamer.initialize(path)

		streamer.connect(audioContext?.destination)

		streamer.start()

		return streamer
	}
}

const audioContextStop = ({audioContext, streamerNode}: {audioContext: AudioContext; streamerNode: StreamerNode}) => {
	streamerNode.stop()
	audioContext?.close()
}
