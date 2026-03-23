import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useAstreamer } from "./components/astreamer";
import { useConfig } from "./useConfig";

const streams: {
  title: string;
  path: string;
  logo?: any;
}[] = [
  {
    title: "Европа плюс",
    path: "http://ep128.hostingradio.ru:8030/ep128",
  },
  {
    title: "Дорожное радио",
    path: "https://dorognoe.hostingradio.ru:8000/dorognoe",
  },
  {
    title: "Авторадио",
    path: "https://pub0301.101.ru:8443/stream/air/mp3/256/100",
  },
  {
    title: "Дорожное радио",
    path: "https://dorognoe.hostingradio.ru:8000/dorognoe2",
  },
];

const Index: FC = () => {
  const { handlePlay, status, handleStop } = useAstreamer();

  const { status: configReady, headerSpace, bottomSpace } = useConfig();

  return (
    <>
      {configReady === "ready" && (
        <View
          style={{
            backgroundColor: "#fff",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: headerSpace,

            paddingBottom: bottomSpace,
          }}
        >
          <FlatList
            data={streams}
            keyExtractor={({ path }) => `${path}`}
            renderItem={({ item: stream }) => {
              return (
                <Pressable
                  onPress={() => {
                    handlePlay(stream.path);
                  }}
                  style={{
                    height: 48,
                  }}
                >
                  <Text>{stream.title}</Text>
                </Pressable>
              );
            }}
          />

          {status && (
            <Pressable
              style={{
                borderWidth: 1,
                paddingHorizontal: 48,
                paddingVertical: 16,
              }}
              onPress={handleStop}
            >
              <Text>STOP</Text>
            </Pressable>
          )}
        </View>
      )}
    </>
  );
};

export default Index;
