import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const HomeScreen: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const handleLogout = () => {
    // Restablecer el nombre de usuario a null
    setUsername(null);
  };

  const handleGoToLogin = () => {
    // Aquí iría la lógica para navegar a la página de inicio de sesión
    // Por ahora, simplemente restablecemos el nombre de usuario y simulamos la navegación
    setUsername(null);
    console.log("Navigating to login page...");
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      {username ? (
        <>
          <Text style={styles.loggedInText}>Logged in as: {username}</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text style={styles.whiteText}>No has iniciado sesión</Text>
          <Button title="Ir a iniciar sesión" onPress={handleGoToLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loggedInText: {
    fontSize: 18,
    marginBottom: 20,
  },
  whiteText: {
    color: "#fff", // Color de fuente blanco
  },
});

export default HomeScreen;
