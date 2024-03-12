import { Drum } from './Drum';
import { PlayProvider } from "./context/Play";
import './Drum.css'
export function Pornire() {
    return (
        <PlayProvider>
            <Drum/>
        </PlayProvider >
  );
};
