import { React, Suspense} from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Loader } from '@react-three/drei'

/* createRoot(document.getElementById('root')).render(<App />) */

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </>
)

reportWebVitals();
