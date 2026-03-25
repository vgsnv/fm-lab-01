const streams: {
	title: string
	path: string
	logo?: any
}[] = [
	{
		title: 'Европа плюс',
		path: 'http://ep128.hostingradio.ru:8030/ep128',
	},
	{
		title: 'Дорожное радио',
		path: 'https://dorognoe.hostingradio.ru:8000/dorognoe',
	},
	{
		title: 'Авторадио',
		path: 'https://pub0301.101.ru:8443/stream/air/mp3/256/100',
	},
	{
		title: 'Дорожное радио(not working)',
		path: 'https://dorognoe.hostingradio.ru:8000/dorognoe2',
	},
	{
		title: 'Вести ФМ',
		path: 'http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_128kbps',
	},

	{
		title: 'Русское Радио',
		path: 'https://rusradio.hostingradio.ru/rusradio128.mp3',
	},

	{
		title: 'Record Супердискотека 90-х',
		path: 'https://radiorecord.hostingradio.ru/sd9096.aacp',
	},
	{
		title: 'Монте Карло',
		path: 'http://montecarlo.hostingradio.ru/montecarlo96.aacp',
	},
]

export const useRadioDB = () => {
	return {
		streams,
	}
}
