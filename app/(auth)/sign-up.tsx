import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Sign Up</Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
                Bắt đầu
            </Link>
        </View>
    )
}

export default SignUp