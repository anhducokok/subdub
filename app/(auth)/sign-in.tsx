import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignIn = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Sign In</Text>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
                Sign Up
            </Link>
        </View>
    )
}

export default SignIn