import { Image } from "expo-image"
import { Moon, Sun } from "lucide-react-native"
import { Appearance, TouchableOpacity, View } from "react-native"

import { HelloWave } from "@/components/hello-wave"
import ParallaxScrollView from "@/components/parallax-scroll-view"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { useColorScheme } from "@/hooks/use-color-scheme"

export default function AboutScreen() {
	const colorScheme = useColorScheme()

	const toggleTheme = () => {
		const newTheme = colorScheme === "dark" ? "light" : "dark"
		Appearance.setColorScheme(newTheme)
	}

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
			<ThemedView className="flex-1 gap-6 p-4">
				<View className="gap-3 items-center py-6">
					<View className="flex-row items-center justify-between w-full">
						<View />
						<HelloWave />
						<TouchableOpacity onPress={toggleTheme} className="p-2">
							{colorScheme === "dark" ? (
								<Sun size={24} color="white" />
							) : (
								<Moon size={24} color="#4C5AA0" />
							)}
						</TouchableOpacity>
					</View>
					<ThemedText className="text-3xl font-bold">
						shadcn rn registry
					</ThemedText>
					<ThemedText className="text-sm opacity-70 text-center">
						a template repository for building component registries in react
						native
					</ThemedText>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">what is this?</ThemedText>
					<ThemedText className="text-sm leading-6">
						this is a minimal template that brings the shadcn registry pattern
						to react native. it allows you to create, organize, and distribute
						reusable components through a structured registry system.
					</ThemedText>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">features</ThemedText>
					<View className="gap-3">
						<View className="gap-1">
							<ThemedText className="font-semibold">
								📦 structured registry
							</ThemedText>
							<ThemedText className="text-sm opacity-70">
								organize components in registry/components-lib/components and
								registry/components-lib/blocks
							</ThemedText>
						</View>
						<View className="gap-1">
							<ThemedText className="font-semibold">
								🎨 nativewind support
							</ThemedText>
							<ThemedText className="text-sm opacity-70">
								build components with tailwind css utilities
							</ThemedText>
						</View>
						<View className="gap-1">
							<ThemedText className="font-semibold">✨ animations</ThemedText>
							<ThemedText className="text-sm opacity-70">
								powered by react-native-reanimated for smooth interactions
							</ThemedText>
						</View>
						<View className="gap-1">
							<ThemedText className="font-semibold">
								🌙 theme support
							</ThemedText>
							<ThemedText className="text-sm opacity-70">
								light and dark mode support built-in
							</ThemedText>
						</View>
					</View>
				</View>

				<View className="gap-4 pb-4 border-b border-gray-200">
					<ThemedText className="text-xl font-bold">getting started</ThemedText>
					<View className="gap-2">
						<ThemedText className="text-sm font-semibold">
							1. create components
						</ThemedText>
						<ThemedText className="text-sm opacity-70">
							add new components to registry/components-lib/components or
							registry/components-lib/blocks
						</ThemedText>
						<ThemedText className="text-sm font-semibold mt-3">
							2. update registry.json
						</ThemedText>
						<ThemedText className="text-sm opacity-70">
							add metadata entries for your components
						</ThemedText>
						<ThemedText className="text-sm font-semibold mt-3">
							3. showcase
						</ThemedText>
						<ThemedText className="text-sm opacity-70">
							components appear in the registry tab
						</ThemedText>
					</View>
				</View>

				<View className="gap-4 pb-8">
					<ThemedText className="text-xl font-bold">built with</ThemedText>
					<View className="gap-2">
						<ThemedText className="text-sm">• expo & expo-router</ThemedText>
						<ThemedText className="text-sm">• react native</ThemedText>
						<ThemedText className="text-sm">
							• nativewind & tailwindcss
						</ThemedText>
						<ThemedText className="text-sm">
							• react-native-reanimated
						</ThemedText>
						<ThemedText className="text-sm">• lucide-react-native</ThemedText>
					</View>
				</View>
			</ThemedView>
		</ParallaxScrollView>
	)
}
