type DesktopIconProps = {
    label: string;
    onOpen: () => void; 
  };
  
  export default function DesktopIcon({ label, onOpen }: DesktopIconProps) {
    return (
      <button
        onDoubleClick={onOpen}
        tabIndex={0}
        style={{
          width: 88,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          cursor: "default",
          userSelect: "none",
          margin: 8
        }}
        aria-label={label}
      >
        <div
          style={{
            width: 48,
            height: 48,
            background: "#4f46e5",
            borderRadius: 8
          }}
        />
        <span className="text-white" style={{ fontSize: 12, textAlign: "center" }}>
          {label}
        </span>
      </button>
    );
  }