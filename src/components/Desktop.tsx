import { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";

const apps = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Personal Projects" },
  { id: "contact", label: "Contact" },
];

export default function Desktop() {
// en Desktop.tsx
const [openAppId, setOpenAppId] = useState<string | null>(null);

const openApp = openAppId ? apps.find(a => a.id === openAppId) : null;
const handleOpen = (id: string) => {
  setOpenAppId(id); // al abrir una, reemplaza la anterior
};

const handleClose = () => {
  setOpenAppId(null); // cierra la actual
};
  return (
    <div style={{ width: "100%", height: "100%", padding: 16, position: "relative", backgroundImage: "url('/japan-wallpaper.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {apps.map(app => (
        <DesktopIcon
          key={app.id}
          label={app.label}
          onOpen={() => handleOpen(app.id)}
        />
      ))}

{openApp && (
  <Window
    key={openApp.id}
    title={openApp.label}
    onClose={handleClose}
  >
    <p>Contenido de {openApp.label}</p>
  </Window>
)}

    </div>
  );
}
