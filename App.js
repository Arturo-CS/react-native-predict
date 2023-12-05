import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { FileProvider } from './src/context/FileContext.jsx';
import { AuthProvider } from './src/context/AuthContext.jsx';

export default function App() {
  return (
    <NativeRouter>
      <AuthProvider>
        <FileProvider>
          <Main />
        </FileProvider>
      </AuthProvider>
    </NativeRouter>
  );}

