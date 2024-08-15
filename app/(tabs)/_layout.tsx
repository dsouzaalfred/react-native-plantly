import { theme } from "@/theme";
import { Entypo, Feather } from "@expo/vector-icons";
import { Redirect, Tabs, Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

import { useUserStore } from "@/store/userStore";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    // eslint-disable-next-line prettier/prettier
    (state) => state.hasFinishedOnboarding
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
