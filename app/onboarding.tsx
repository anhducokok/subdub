import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Onboarding = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">Onboarding</Text>
            <Link href="/" className="mt-4 rounded bg-black p-2 text-white">
                Bắt đầu
            </Link>
        </View>
    )
}

export default Onboarding