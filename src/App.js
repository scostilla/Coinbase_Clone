import {
  Assets,
  Deposit,
  Pay,
  ProtectedPages,
  SignIn,
  SignUp,
  Trade,
} from './pages';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './components';
import { UserProvider } from './contexts/UserContext';
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Navigate to='/assets' />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<ProtectedPages />}>
              <Route path='/' element={<Dashboard />}>
                <Route path='assets' element={<Assets />} />
                <Route path='trade' element={<Trade />} />
                <Route path='pay' element={<Pay />} />
                <Route path='deposit' element={<Deposit />} />
                <Route path='*' element={<Assets />} />
              </Route>
            </Route>
          </Routes>
        </UserProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
