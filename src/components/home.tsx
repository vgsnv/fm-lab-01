import {FC, useState} from 'react'
import {FlatList} from 'react-native'

import {Pressable, Text, View} from 'components/atoms'

import {useConfig} from '../constants/useConfig'
import {useAudioContext} from '../core/useAudioContext'
import {useRadioDB} from '../core/useRadioDB'

export const Home: FC = () => {
	const {handlePlay, status, handleStop} = useAudioContext()

	const {streams} = useRadioDB()
	const {status: configReady, headerSpace, bottomSpace} = useConfig()

	const [currentStation, setCurrentStation] = useState<string>()

	const handleSetPlayer = (path: string) => {
		handlePlay(path, () => {
			setCurrentStation(path)
		})
	}

	const hadleUP = () => {
		const currentIndex = streams.findIndex((x) => x.path === currentStation)
		if (currentIndex === 0) {
			handleSetPlayer(streams[streams.length - 1].path)
		} else {
			handleSetPlayer(streams[currentIndex - 1].path)
		}
	}

	const hadleDOWN = () => {
		const currentIndex = streams.findIndex((x) => x.path === currentStation)
		if (currentIndex + 1 < streams.length) {
			handleSetPlayer(streams[currentIndex + 1].path)
		} else {
			handleSetPlayer(streams[0].path)
		}
	}

	return (
		<>
			{configReady === 'ready' && (
				<View
					bg={'$background'}
					height={'100%'}
					justifyContent={'center'}
					alignItems={'center'}
					style={{
						paddingTop: headerSpace,
						paddingBottom: bottomSpace,
					}}
				>
					<FlatList
						style={{
							flex: 1,
							width: '100%',
							padding: 16,
						}}
						data={streams}
						keyExtractor={({path}) => `${path}`}
						ItemSeparatorComponent={() => {
							return <View height={4} />
						}}
						renderItem={({item: stream}) => {
							return (
								<Pressable
									onPress={() => {
										handlePlay(stream.path, () => {
											setCurrentStation(stream.path)
										})
									}}
									borderRightColor={'$acsentColor'}
									style={{
										borderWidth: 1,
										borderRightWidth: currentStation === stream.path ? 16 : 1,
										justifyContent: 'center',
										padding: 4,
										height: 48,
									}}
								>
									<Text>{stream.title}</Text>
								</Pressable>
							)
						}}
					/>

					<View
						style={{
							width: '100%',
							borderTopWidth: 2,
							height: 200,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 16,
						}}
					>
						<Pressable
							style={{
								borderWidth: 1,
								paddingHorizontal: 48,
								paddingVertical: 16,
							}}
							onPress={() =>
								handleStop(() => {
									setCurrentStation('')
								})
							}
						>
							<Text>STOP</Text>
						</Pressable>
						<View>
							<Pressable
								style={{
									borderWidth: 1,
									paddingHorizontal: 48,
									paddingVertical: 16,
								}}
								onPress={hadleUP}
							>
								<Text>UP</Text>
							</Pressable>

							<Pressable
								style={{
									borderWidth: 1,
									paddingHorizontal: 48,
									paddingVertical: 16,
								}}
								onPress={hadleDOWN}
							>
								<Text>DOWN</Text>
							</Pressable>
						</View>
					</View>
				</View>
			)}
		</>
	)
}
