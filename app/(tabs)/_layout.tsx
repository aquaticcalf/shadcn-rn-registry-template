import { Tabs } from "expo-router"
import { Grid3x3, Info } from "lucide-react-native"

import { HapticTab } from "@/components/haptic-tab"
import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
			}}
		>
			<Tabs.Screen
				name="registry"
				options={{
					title: "registry",
					tabBarIcon: ({ color }) => <Grid3x3 size={28} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "about",
					tabBarIcon: ({ color }) => <Info size={28} color={color} />,
				}}
			/>
		</Tabs>
	)
}
