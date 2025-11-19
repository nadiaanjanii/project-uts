// File: app/auth/_layout.tsx

import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      {/* Semua halaman di grup /auth tidak memiliki header. */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}