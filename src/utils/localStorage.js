import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getItem(key) {
    try {
      let item = await AsyncStorage.getItem(key);
      return item
    } catch (error) {
      throw error;
    }
  }
export async function setItem(key,value) {
    try {
       await AsyncStorage.setItem(key,value);
    } catch (error) {
      throw error;
    }
}
export async function deleteItem(key) {
    try {
       await AsyncStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
}
export async function clearLocalStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      throw error;
    }
  }