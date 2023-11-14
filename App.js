import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { FileProvider } from './src/context/FileContext.jsx';

export default function App() {
  return (
    <NativeRouter>
      <FileProvider>
        <Main />
      </FileProvider>
    </NativeRouter>
  );}

