import { Image } from "expo-image"
import { View } from "react-native"
import { HelloWave } from "@/components/hello-wave"
import ParallaxScrollView from "@/components/parallax-scroll-view"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { Collapsible } from "@/components/ui/collapsible"

export default function RegistryScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={{
						height: 178,
						width: 290,
						bottom: 0,
						left: 0,
						position: "absolute",
					}}
				/>
			}
		>
			<ThemedView className="flex-1 gap-4 p-4">
				<View className="gap-2 mb-2">
					<ThemedText className="text-3xl font-bold">
						component registry
					</ThemedText>
					<ThemedText className="text-sm opacity-70">
						a collection of react native components from your custom registry.
					</ThemedText>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">themed text</ThemedText>
					<ThemedText className="text-sm opacity-70">
						text component with light/dark theme support
					</ThemedText>
					<View className="gap-2 mt-2">
						<ThemedText className="text-base">default text</ThemedText>
						<ThemedText className="text-base font-semibold">
							semi-bold text
						</ThemedText>
						<ThemedText className="text-lg font-bold">subtitle text</ThemedText>
					</View>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">themed view</ThemedText>
					<ThemedText className="text-sm opacity-70">
						view component with theme-aware background
					</ThemedText>
					<View className="mt-2">
						<ThemedView className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 items-center">
							<ThemedText>themed background</ThemedText>
						</ThemedView>
					</View>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">hello wave</ThemedText>
					<ThemedText className="text-sm opacity-70">
						animated emoji wave component
					</ThemedText>
					<View className="mt-2 items-center">
						<HelloWave />
					</View>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">collapsible</ThemedText>
					<ThemedText className="text-sm opacity-70">
						expandable/collapsible section with smooth animations
					</ThemedText>
					<View className="mt-2 gap-3">
						<Collapsible title="expand to see content">
							<ThemedText>this is collapsible content</ThemedText>
						</Collapsible>
						<Collapsible title="another section">
							<ThemedText>more content goes here</ThemedText>
						</Collapsible>
					</View>
				</View>

				<View className="gap-4 pb-4">
					<ThemedText className="text-xl font-bold">
						parallax scroll view
					</ThemedText>
					<ThemedText className="text-sm opacity-70">
						scroll view with parallax header effect
					</ThemedText>
					<ThemedText className="text-sm opacity-70">
						this page is using this component as its container!
					</ThemedText>
				</View>
			</ThemedView>
		</ParallaxScrollView>
	)
}
