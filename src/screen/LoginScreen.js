import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginUser } from '../api/authApi';
import { LoginStyles } from '../styles/LoginStyle';
import SocialLogin from '../components/SocialLogin';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        const result = await loginUser(email, password);
        if (result.success) {
            navigation.navigate('Home', { user: result.data });
        } else {
            setError(result.message);
        }
    };

    return (
        <View style={LoginStyles.container}>

            <View style={LoginStyles.imageBox}>

                <Text style={LoginStyles.logo}>Pliē</Text>

            </View>

            <TextInput
                style={LoginStyles.input}
                placeholder="email@email.com"
                value={email}
                onChangeText={setEmail}
            />

            <View style={LoginStyles.passwordContainer}>
                <TextInput
                    style={[LoginStyles.input, { flex: 1 }]}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secure}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)} style={LoginStyles.eyeIcon}>
                    <Text>{secure ? '👁️‍🗨️' : '👁️'}</Text>
                </TouchableOpacity>
            </View>

            <Text style={LoginStyles.forgotText}>Forgot Password?</Text>

            {error ? <Text style={LoginStyles.error}>{error}</Text> : null}

            <TouchableOpacity style={LoginStyles.signInButton} onPress={handleLogin}>
                <Text style={LoginStyles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={LoginStyles.signUpText}>
                Not a member? <Text style={{ fontWeight: 'bold' }}>Sign Up Here</Text>
            </Text>

            <Text style={LoginStyles.orText}>──────── or Sign In with: ────────</Text>

            <SocialLogin />

            <Text style={LoginStyles.guestText}>Enter as Guest</Text>
        </View>
    );
}
