import { useState } from "react";
import { useTranslation } from "react-i18next";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";

const apps = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Personal Projects" },
  { id: "contact", label: "Contact" },
];

export default function Desktop() {
// en Desktop.tsx
const [openAppId, setOpenAppId] = useState<string | null>(null);
const { t } = useTranslation();

const openApp = openAppId ? apps.find(a => a.id === openAppId) : null;
const handleOpen = (id: string) => {
  setOpenAppId(id); // al abrir una, reemplaza la anterior
};

const handleClose = () => {
  setOpenAppId(null); // cierra la actual
};
  return (
    <div  
    style={{ width: "100%", height: "100%", position: "relative", backgroundImage: "url('/japan-wallpaper.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <Taskbar />
      {apps.map(app => (
        <DesktopIcon
          key={app.id}
          label={t(`apps.${app.id}`)}
          onOpen={() => handleOpen(app.id)}
        />
      ))}

{openApp && (
  <Window
    key={openApp.id}
    title={t(`apps.${openApp.id}`)}
    onClose={handleClose}
  >
    <p>{t("ui.contentOf", { label: t(`apps.${openApp.id}`) })}</p>
  </Window>
)}

    </div>
  );
}
