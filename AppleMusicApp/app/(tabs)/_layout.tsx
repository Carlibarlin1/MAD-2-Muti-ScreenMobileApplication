import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#ff375f',
      tabBarInactiveTintColor: '#ffffff',
      tabBarStyle: {
        backgroundColor: '#181818'
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
              />
          ),
        }}
        />

        <Tabs.Screen
          name="new"
          options={{
            title: "New",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              size={size}
              color={color}
              />
            ),
          }}
          />

          <Tabs.Screen
            name="radio"
            options={{
              title: 'Radio',
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                name={focused ? 'radio' : 'radio-outline'}
                size={size}
                color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
          name="library"
          options={{
            title: 'Library',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons 
              name={focused ? 'musical-notes' : 'musical-notes-outline'}
              size={size}
              color={color}
              />
            ),
          }}
          />
    </Tabs>
  );
}